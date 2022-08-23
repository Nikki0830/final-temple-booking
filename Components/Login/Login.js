import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  _Text,
  Alert,
  ToastAndroid,
} from 'react-native';
import React, {Component} from 'react';
// import ToastManager, { Toast } from 'toastify-react-native';
// import { Modal } from 'react-native';
// import { Toast } from './ToastManager';
// import toast from 'react-native-toast-manager'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  handleClick = (val, key) => {
    this.setState({...this.state, [key]: val});
    // var tempLength = tem.length;
    // if (tempLength == 5) {
    //   Alert.alert('Sorry, You Cannot Enter More Than 8 Characters...');
    // }
  };
  handleSubmit = () => {
    console.log(this.state);
    if (this.state.username == 'admin' && this.state.password == 'admin') {
      this.props.navigation.navigate('Lottify');

      // Alert.alert("Logged in successfully")
    } else {
      // this.props.navigation.navigate('Lottify');
      // Alert.alert('Please enter correct details');
      ToastAndroid.showWithGravityAndOffset(
        'Please enter correct details',
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        10,
        -500
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            color: 'yellow',
            fontWeight: 'bold',
            marginLeft: -10,
            fontSize: 22,
            marginTop: -60,
            fontStyle: 'italic',
            textDecorationLine: 'underline',
            textShadowColor: 'red',
            textShadowOffset: {width: 2, height: 2},
            textShadowRadius: 5,
          }}>
          Welcome to Temple Booking
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          maxLength={8}
          autoCapitalize="none"
          placeholderTextColor="yellow"
          // onChangeText={val => this.handleClick('username', val)}
          onChangeText={item => this.handleClick(item, 'username')}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          maxLength={8}
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="yellow"
          // onChangeText={val => this.handleClick('password', val)}
          onChangeText={item => this.handleClick(item, 'password')}
        />
        {/* 
        <TextInput
          style={styles.input}
          placeholder="confirm Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="yellow"
          onChangeText={val => this.onChangeText('confirmPassword', val)}
        /> */}
        <TouchableOpacity
          style={styles.opacity2}
          // onPress={() => this.props.navigation.navigate('Lottify')}>
          onPress={() => this.handleSubmit()}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              marginTop: 8,
              fontWeight: 'bold',
              fontSize: 20,
              fontStyle: 'italic',
              textShadowColor: 'red',
              textShadowOffset: {width: 2, height: 2},
              textShadowRadius: 5,
            }}>
            Submit
          </Text>
        </TouchableOpacity>
        {/* <ToastManager /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 52,
    marginTop: 30,
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
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 800,
  },
  opacity2: {
    marginTop: 70,
    width: 150,
    height: 50,
    // marginLeft: 50,
    borderWidth: 3,
    borderColor: 'yellow',
    borderRadius: 50,
  },
});
