import {
  Text,
  View,
  StyleSheet,
  Animated,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTranslation, withTranslation} from 'react-i18next';
import TButton from '../i18nn/Transbutton/Button';
import i18n from '../i18nn/Translation/i18n';
class Landing extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    animation: new Animated.Value(0),
  };
  componentDidMount() {
    // this.startAnimation()
    setInterval(() => {
      this.startAnimation2();
    }, 3000);
  }
  startAnimation2 = () => {
    Animated.loop(
      Animated.timing(this.state.animation, {
        toValue: 360,
        duration: 2000,
        useNativeDriver: false,
      }),
    ).start();
  };
  changeLanguage = lang => {
    i18n.changeLanguage(lang);
  };
  render() {
    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg'],
    });

    const animatedStyles = {
      transform: [
        // {rotate: rotateInterpolate},
        {rotateX: rotateInterpolate},
        // {rotateY: rotateInterpolate},
      ],
    };
    const {t} = this.props;
    return (
      <View>
        {/* <Text>Landing</Text> */}
        <ImageBackground
          style={{
            width: 400,
            height: 790,
            opacity: 0.8,
            backgroundColor: 'black',
          }}
          source={{
            uri: 'https://images.unsplash.com/photo-1619897917266-b52606e1729d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a2FpbGFzaCUyMHRlbXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 40,
              marginLeft: 30,
              marginTop: 30,
              fontWeight: 'bold',
              fontStyle: 'italic',
              textShadowColor: 'red',
              textShadowOffset: {width: 2, height: 2},
              textShadowRadius: 5,
            }}>
            {t('welcome')}
          </Text>
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.box, animatedStyles]}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  marginLeft: 35,
                  marginTop: 5,
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  textShadowColor: 'red',
                  textShadowOffset: {width: 2, height: 2},
                  textShadowRadius: 5,
                }}>
               {t('read')}
              </Text>
            </Animated.View>
          </TouchableWithoutFeedback>
          {/* <TButton/> */}
          <TouchableOpacity
            style={styles.opacity3}
            onPress={() => this.changeLanguage('ar')}>
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
              Arabic
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.opacity4}
            onPress={() => this.changeLanguage('en')}>
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
              English
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.opacity5}
            onPress={() => this.changeLanguage('hi')}>
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
              Hindi
            </Text>
          </TouchableOpacity>

          {/* <TButton/> */}
          <TouchableOpacity
            style={styles.opacity}
            onPress={() => this.props.navigation.navigate('Login')}>
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
              {t('login')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.opacity2}
            onPress={() => this.props.navigation.navigate('Signup')}>
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
              {t('signup')}
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  opacity: {
    cursor: 'pointer',
    marginTop: 360,
    width: 280,
    height: 50,
    // backgroundColor:"#ecb72e",
    marginLeft: 100,
    borderWidth: 3,
    borderColor: '#ecb72e',
    borderRadius: 50,
  },
  opacity2: {
    marginTop: 30,
    width: 280,
    height: 50,
    // backgroundColor:"#ecb72e",
    marginLeft: 100,
    borderWidth: 3,
    borderColor: '#ecb72e',
    borderRadius: 50,
  },
  opacity3: {
    marginTop: 15,
    width: 80,
    height: 50,
    // backgroundColor:"#ecb72e",
    marginLeft: 120,
    borderWidth: 3,
    borderColor: '#ecb72e',
    borderRadius: 50,
  },
  opacity4: {
    marginTop: -49,
    width: 80,
    height: 50,
    // backgroundColor:"#ecb72e",
    marginLeft: 230,
    borderWidth: 3,
    borderColor: '#ecb72e',
    borderRadius: 50,
  },
  opacity5: {
    marginTop: -49,
    width: 80,
    height: 50,
    // backgroundColor:"#ecb72e",
    marginLeft: 20,
    borderWidth: 3,
    borderColor: '#ecb72e',
    borderRadius: 50,
  },
});
export default withTranslation()(Landing);
