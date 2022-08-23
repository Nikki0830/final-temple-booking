import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

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
          }}>
          Welcome for Temple Booking
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="yellow"
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          // secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="yellow"
          onChangeText={val => this.onChangeText('phone', val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="yellow"
          onChangeText={val => this.onChangeText('password', val)}
        />

        <TextInput
          style={styles.input}
          placeholder="confirm Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="yellow"
          onChangeText={val => this.onChangeText('confirmPassword', val)}
        />
        <TouchableOpacity style={styles.opacity2}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              marginTop: 8,
              fontWeight: 'bold',
              fontSize: 20,
              fontStyle: 'italic',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
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
