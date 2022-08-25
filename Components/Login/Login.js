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
import axios from 'axios';
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
      user: {usersData: []},
      // userDetails:{usersData2: []},
    };
  }
  componentDidMount = () => {
    axios.get('https://temple-server.herokuapp.com/users').then(
      response =>
        this.setState(
          {
            ...this.state,
            user: {...this.user, usersData: response.data},
          },
          () => {
            // let userList = this.state.user.usersData;
            // this.setState(userList)
            console.log('USERLogin', this.state.user.usersData);

            // .catch(err => {
            //   console.log(err);
            // });
          },
        ),
      // .catch(err => {
      //   console.log(err);
      // });
    );
    // let flag = false;
    // let isEmail = true;
    // let isPassword = true;
    // let loginDetailsOfUser;
    // console.log('USERL', userList);
  };
  handleClick = (val, key) => {
    this.setState({...this.state, [key]: val});
    // var tempLength = tem.length;
    // if (tempLength == 5) {
    //   Alert.alert('Sorry, You Cannot Enter More Than 8 Characters...');
    // }
  };
  // handleCondition = () => {
  //   this.state.user.usersData.map((element)=>{
  //     return(
  //       <View>
  //         <Text>{element.username}</Text>
  //       </View>
  //       )
  //  })
  // }
  handleSubmit = () => {
    console.log(this.state);
    // if (
    //   this.state.username == this.state.user.usersData.username &&
    //   this.state.password == this.state.user.usersData.password
    // ) {
    //   this.props.navigation.navigate('Lottify');
    // } else {
    //   ToastAndroid.showWithGravityAndOffset(
    //     'Please fill the correct details',
    //     ToastAndroid.LONG,
    //     ToastAndroid.TOP,
    //     10,
    //     -500,
    //   );
    // }
    // if (this.state.username == 'admin' && this.state.password == 'admin') {
    //   this.props.navigation.navigate('Lottify');

    //   // Alert.alert("Logged in successfully")
    // } else {
    //   // this.props.navigation.navigate('Lottify');
    //   // Alert.alert('Please enter correct details');
    //   ToastAndroid.showWithGravityAndOffset(
    //     'Please enter correct details',
    //     ToastAndroid.LONG,
    //     ToastAndroid.TOP,
    //     10,
    //     -500,
    //   );
    // }
    // let flag = false;
    // let isUser = true;
    // let isPassword = true;
    // let loginDetailsOfUser;
    // console.log('USERLogin3', this.state.user.usersData);
    // console.log('USERLogin3', this.state.user.usersData.length);
     let flag = true;
    for (let i = 0; i < this.state.user.usersData.length; i++) {
      //confirming the both login page data with the data is already stored by signup page into the global state comparing the both of them
      console.log('USERLogin4', this.state.user.usersData[i]);
      console.log('USERLogin5', this.state.username);
      console.log('USERLogin6', this.state.password);
      console.log('USERLogin7', this.state.user.usersData[i].username);
      console.log('USERLogin8', this.state.user.usersData[i].password);
      if (
        this.state.username == this.state.user.usersData[i].username &&
        this.state.password == this.state.user.usersData[i].password
      ) {
        // ToastAndroid.showWithGravity(
        //   "You are successfully log in",
        //   ToastAndroid.SHORT,
        //   ToastAndroid.CENTER
        // );
        // this.props.navigation.navigate('Signup');
        // ToastAndroid.show("You are successfully log in", ToastAndroid.SHORT);
        // Alert.alert("You are successfully log in");
        this.props.navigation.navigate('Lottify');
      } else {
        // ToastAndroid.showWithGravityAndOffset(
        //   'Please fill the  correct details',
        //   // ToastAndroid.LONG,
        //   ToastAndroid.TOP,
        //   10,
        //   -500,
        // );
        // ToastAndroid.show("Please fill the  correct details", ToastAndroid.SHORT);
        // Alert.alert("Please fill the  correct details");
        ToastAndroid.showWithGravity(
          "Please fill the  correct details",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      }
    }
    // if (flag) {
    //   // showToastWithGravity('You are successfully log in');
    //   ToastAndroid.showWithGravityAndOffset(
    //     'You are successfully log in',
    //     ToastAndroid.LONG,
    //     ToastAndroid.TOP,
    //     10,
    //     -500,
    //   );
    //   // dispatch(isUserIsLogIn(loginDetailsOfUser));
    //   this.props.navigation.navigate('Lottify');
    // } else if (!isUser) {
    //   // showToastWithGravity(
    //   //   'You have entered wrong username. Please check your email',
    //   // );
    //   ToastAndroid.showWithGravityAndOffset(
    //     'You have entered wrong username. Please check your email',
    //     ToastAndroid.LONG,
    //     ToastAndroid.TOP,
    //     10,
    //     -500,
    //   );
    // } else if (!isPassword) {
    //   // showToastWithGravity(
    //   //   'You have entered wrong password. Please check your password',
    //   // );
    //   ToastAndroid.showWithGravityAndOffset(
    //     'You have entered wrong password. Please check your password',
    //     ToastAndroid.LONG,
    //     ToastAndroid.TOP,
    //     10,
    //     -500,
    //   );
    // }
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
          // maxLength={8}
          autoCapitalize="none"
          placeholderTextColor="yellow"
          // onChangeText={val => this.handleClick('username', val)}
          onChangeText={item => this.handleClick(item, 'username')}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          // maxLength={8}
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
            Login
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
