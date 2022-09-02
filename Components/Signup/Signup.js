import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {Component} from 'react';
import axios from 'axios';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      cpassword: '',
    };
  }
  handleInputChange = (key, val) => {
    this.setState({...this.state, [key]: val});
    console.log(this.state);
  };
  handleInputClick = () => {
    axios
      .post('https://temple-server.herokuapp.com/users', {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        cpassword: this.state.cpassword,
      })
      .then(response => {
       
        console.log('Nikita 1 -', response.data);
        console.log('response', response);
        // dispatch(formdata(response.data));
      })
      .catch(err => {
        console.log('Nikita 1 -', err);
        console.log(err);
      });
    //get method
    axios
      .get('https://temple-server.herokuapp.com/users')
      .then(response => {
        console.log('Nikita 2 -', response.data);
        console.log('response', response);
      })
      .catch(err => {
        console.log('Nikita 2 -', err);
        console.log(err);
      });
    console.log('hello');
    if (this.state.password !== this.state.cpassword) {
      ToastAndroid.showWithGravityAndOffset(
        'Please enter correct password',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        10,
        -500,
      );
    }
    if (
      this.state.username.length > 0 &&
      this.state.password.length > 0 &&
      this.state.email.length > 0 &&
      this.state.username.length > 0 &&
      this.state.password == this.state.cpassword
    ) {
      this.props.navigation.navigate('Login');
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Please fill the details',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        10,
        -500,
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            borderWidth: 2,
            borderColor: 'greenyellow',
            height: 460,
            width: 350,
            borderRadius:10,
            elevation:3,
            shadowColor:"greenyellow"
          }}>
          <Text
            style={{
              color: 'greenyellow',
              fontWeight: 'bold',
              marginLeft: 15,
              fontSize: 23,
              marginTop: -60,
              fontStyle: 'italic',
              textDecorationLine: 'underline',
              textShadowColor: 'red',
              textShadowOffset: {width: 2, height: 2},
              textShadowRadius: 5,
            }}>
            Welcome for Temple Booking
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            autoCapitalize="none"
            placeholderTextColor="yellow"
            onChangeText={val => this.handleInputChange('username', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            // secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="yellow"
            onChangeText={val => this.handleInputChange('email', val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="yellow"
            onChangeText={val => this.handleInputChange('password', val)}
          />

          <TextInput
            style={styles.input}
            placeholder="confirm Password"
            secureTextEntry={true}
            autoCapitalize="none"
            placeholderTextColor="yellow"
            onChangeText={val => this.handleInputChange('cpassword', val)}
          />
          <TouchableOpacity
            style={styles.opacity2}
            onPress={() => this.handleInputClick()}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                marginTop: 8,
                fontWeight: 'bold',
                fontSize: 20,
                fontStyle: 'italic',
              }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 52,
    marginTop: 40,
    borderWidth: 1,
    fontStyle: 'italic',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'yellow',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'yellow',
    marginLeft:20
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 800,
  },
  opacity2: {
    marginTop: 40,
    width: 150,
    height: 50,
    marginLeft: 100,
    borderWidth: 3,
    borderColor: 'yellow',
    borderRadius: 50,
    elevation:1,
    shadowColor:"greenyellow"
  },
});
