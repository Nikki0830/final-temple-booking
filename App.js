import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stacknavigator from './Components/Stacknavigator/Stacknavigator';
import DrawerNav from './Components/Drawernavigator/DrawerNav';
import { Provider } from 'react-redux';
import { Store } from './Components/Redux/Store';



const App = () => {
  return (
    <Provider store={Store}>
      <View style={{flex: 1}}>
        <NavigationContainer>
          {/* <Stacknavigator /> */}
          <DrawerNav />
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
