import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {Component} from 'react';
import { IMG_URL1 } from '../Constraints/Constant';
// import { useTranslation } from "react-i18next";


export default class Splash extends Component {
constructor(props){
    super(props);
}

  state = {
    animation: new Animated.Value(0),
  };
  componentDidMount() {
    // this.startAnimation()
    setInterval(() => {
      this.startAnimation();
    }, 3000);
  }
  startAnimation = () => {
    Animated.loop(
      Animated.timing(this.state.animation, {
        toValue: 360,
        duration: 2000,
        useNativeDriver: false,
      }),
    ).start();
  };

  render() {
    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });

    const animatedStyles = {
      transform: [
        // {rotate: rotateInterpolate},
        // {rotateX: rotateInterpolate},
        {rotateY: rotateInterpolate},
      ],
    };
    setTimeout(() => {
        this.props.navigation.navigate('Landing')
    }, 8000);
    // const { t } = useTranslation();
    return (
      <View>
        <ImageBackground
          style={{width: 400, height: 850}}
          source={{
            uri:'https://images.unsplash.com/photo-1616377009507-c8111f07aced?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRlbXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
          }}>
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.box, animatedStyles]}>
              <Text
                style={{
                  color: 'smokeywhite',
                  marginTop: 20,
                  textAlign: 'center',
                  fontSize: 40,
                  fontFamily: 'optima',
                  fontWeight: 'bold',
                  textShadowColor: 'white',
                  textShadowOffset: {width: 2, height: 2},
                  textShadowRadius: 5,
                }}>
                 {/* {t('temple')} */}
                 Temple Booking
              </Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
