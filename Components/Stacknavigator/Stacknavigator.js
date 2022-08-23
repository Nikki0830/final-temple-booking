import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../Landing/Splash';
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Home from '../Home/Home';
import searchScreen from '../Home/Searchcomponent';
import Statesearch from '../Statesearch/Statesearch';
import Lottify from '../Lottisplash/Lottify';
import Tamilnadu from '../Statesearch/Tamilnadu';
import Booking from '../Booking/Booking';
import Bookingdetails from '../Booking/Bookingdetails';
import Searchcomponent from '../Home/Searchcomponent';
import Tshowmore from '../Home/Tshowmore';
import Kedarnath from '../Home/Kedarnath';
import Mythology from '../Home/Mythology';
import Viewbooking from '../Booking/Viewbooking';

const Stack = createStackNavigator();

function Stacknavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
        // options={{
        //   title: 'Back',
        //   headerStyle: {
        //     backgroundColor: 'skyblue',
        //   },
        // }}
      />
      <Stack.Screen
        name="Statesearch"
        component={Statesearch}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Lottify"
        component={Lottify}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tamilnadu"
        component={Tamilnadu}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Booking"
        component={Booking}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Bookingdetails"
        component={Bookingdetails}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tshowmore"
        component={Tshowmore}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Kedarnath"
        component={Kedarnath}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Mythology"
        component={Mythology}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Viewbooking"
        component={Viewbooking}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

{
}
export default Stacknavigator;
