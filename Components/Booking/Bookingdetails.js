import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setBookingList} from '../Redux/ActionType';
import moment from 'moment';
// import axios from 'axios';

// const baseUrl = 'https://reqres.in';

const Bookingdetails = ({navigation}) => {
  const bookingDeatils = useSelector(state => state.formData);
  const reduxDispatch = useDispatch();
  const [confirmdetail, setConfirmDetail] = useState({});
  useEffect(() => {
    setConfirmDetail(bookingDeatils);
    console.log('bookingdeatails', bookingDeatils);
    return () => {};
  }, []);
  const handleSubmit = () => {
    // console.log('formdata', formData, bookingList);
    let tempBooklist = bookingDeatils;
    tempBooklist.push({
      username: confirmdetail.name,
      adult: confirmdetail.adult,
      children: confirmdetail.children,
      email: confirmdetail.email,
      phone: confirmdetail.phone,
      date: confirmdetail.date,
    });
    reduxDispatch(setBookingList(tempBooklist));
  };
  function handleClick() {
  //   axios
  //   .post("https://temple-server.herokuapp.com/users", {
  //     adult,
  //     children,
  //     date,
  //     email,
  //     username,
  //     phone,
  //   })
  //   .then((response) => {
  //     console.log(response.data);
  //     // dispatch(formdata(response.data));
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // //get method
  // axios
  //   .get("https://temple-server.herokuapp.com/users")
  //   .then((response) => {
  //     console.log("response", response);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // // if (
  //   msg.length > 0 &&
  //   date.length > 0 &&
  //   time.length > 0 &&
  //   adult.length > 0 &&
  //   children.length > 0 &&
  //   email.length > 0 &&
  //   phone.length > 0
  // ) {
  //   history.push("/last");
  // } else {
  //   {
  //     toast.error('Please fill the details', {
  //       position: "top-center",
  //     });
  //   }
  // }
   navigation.navigate('Viewbooking')
  }
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'red',
          marginTop: 30,
          fontSize: 30,
          fontStyle: 'italic',
          marginLeft: 60,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
          textShadowColor: 'white',
          textShadowOffset: {width: 3, height: 3},
          textShadowRadius: 5,
        }}>
        Your booking details
      </Text>
      <View style={styles.cards}>
        <Text
          style={{
            color: 'white',
            marginTop: 5,
            fontSize: 20,
            textAlign: 'center',
            textShadowColor: 'red',
            textShadowOffset: {width: 2, height: 2},
            textShadowRadius: 5,
            fontStyle: 'italic',
          }}>
          Name : {confirmdetail.name}
        </Text>
        <Text
          style={{
            color: 'white',
            marginTop: 5,
            fontSize: 20,
            textAlign: 'center',
            textShadowColor: 'red',
            textShadowOffset: {width: 2, height: 2},
            textShadowRadius: 5,
            fontStyle: 'italic',
          }}>
          Total adult: {confirmdetail.adult}
        </Text>
        <Text
          style={{
            color: 'white',
            marginTop: 5,
            fontSize: 20,
            textAlign: 'center',
            textShadowColor: 'red',
            textShadowOffset: {width: 2, height: 2},
            textShadowRadius: 5,
            fontStyle: 'italic',
          }}>
          Total children: {confirmdetail.children}
        </Text>
        <Text
          style={{
            color: 'white',
            marginTop: 5,
            fontSize: 20,
            textAlign: 'center',
            textShadowColor: 'red',
            textShadowOffset: {width: 2, height: 2},
            textShadowRadius: 5,
            fontStyle: 'italic',
          }}>
          Phone no: {confirmdetail.phone}
        </Text>
        <Text
          style={{
            color: 'white',
            marginTop: 5,
            fontSize: 20,
            textAlign: 'center',
            textShadowColor: 'red',
            textShadowOffset: {width: 2, height: 2},
            textShadowRadius: 5,
            fontStyle: 'italic',
          }}>
          Date: {moment(confirmdetail.date).format('DD/MM/YYYY')}
        </Text>
        <Text
          style={{
            color: 'white',
            marginTop: 5,
            fontSize: 20,
            textAlign: 'center',
            textShadowColor: 'red',
            textShadowOffset: {width: 2, height: 2},
            textShadowRadius: 5,
            fontStyle: 'italic',
          }}>
          Time: {moment(confirmdetail.date).format('hh:mm')}
        </Text>
      </View>
      <TouchableOpacity style={styles.opacity2} onPress={() => handleClick()}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            marginTop: 100,
            fontWeight: 'bold',
            fontSize: 22,
            fontStyle: 'italic',
            borderWidth: 2,
            height: 45,
            width: 200,
            padding: 5,
            borderColor: 'red',
            borderRadius: 10,
            marginLeft: 90,
            textShadowColor: 'magenta',
            textShadowOffset: {width: 1, height: 1},
            textShadowRadius: 5,
          }}>
          Viewbooking
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bookingdetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  cards: {
    height: 'auto',
    width: 360,
    backgroundColor: 'transparent',
    marginTop: 30,
    marginLeft: 10,
    borderwidth: 5,
    borderRadius: 10,
    borderColor: 'yellow',
  },
});
