import React, {Component} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import LottieView from 'lottie-react-native';

export default class Lottify extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    setTimeout(() => {
        this.props.navigation.navigate('Statesearch')
    }, 2000);
    return (
      <View>
        <ImageBackground
          style={{
            width: 400,
            height: 790,
            opacity: 0.8,
            backgroundColor: 'black',
          }}
          source={{
            uri: 'https://media.istockphoto.com/photos/indian-festival-diwali-navratri-celebrations-vertical-picture-by-picture-id1338255082?b=1&k=20&m=1338255082&s=170667a&w=0&h=MR9T6AZeza6FSEHpb8dfv6_oIjFBIfib0ZbxXbbXgOc=',
          }}>
          <LottieView
            style={{width: 300, height: 300, marginTop: -30, marginLeft: 25}}
            source={require('../json/lotti.json')}
            autoPlay
            loop
          />
          <Text
            style={{
              color: 'yellow',
              fontSize: 55,
              marginTop: 380,
              fontStyle: "italic",
              fontWeight:"bold",
              marginLeft:80,
              textDecorationLine:"underline",
              textShadowColor: 'red',
              textShadowOffset: {width: 2, height: 2},
              textShadowRadius: 5,
            }}>
            {' '}
            Welcome{' '}
          </Text>
        </ImageBackground>
      </View>
    );
  }
}
