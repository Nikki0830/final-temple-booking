import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Navbar from '../Navbar/Navbar';

const Mythology = () => {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['yellow', '#33524d']}
        style={styles.linearGradient}>
        <Navbar />
        {/* //////////////////////////////////////////////////////// */}

        <StatusBar barStyle="light-content" />
      </LinearGradient>
      <Text
        style={{
          color: 'yellow',
          fontWeight: 'bold',
          fontSize: 25,
          fontStyle: 'italic',
          textDecorationLine: 'underline',
          textAlign: 'center',
          //   marginLeft: 20,
          marginTop: 20,
          textShadowColor: 'red',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
        }}>
        Lord Indra
      </Text>
      <View>
        <Image
          source={{
            uri: 'https://thecinemaholic.com/wp-content/uploads/2017/10/Lord-Indra.jpg',
          }}
          style={{
            shadowColor: 'greenyellow',
            elevation: 55,
            borderRadius: 20,
            width: 320,
            height: 250,
            marginLeft: 35,
            marginTop: 30,
            // transform:0.5,
            
            // transform: [
            //     { rotateY: "15deg" },
            //     { rotateZ: "15deg" }
            //   ],
            //   transform: [{ translateX: 50 }]
          }}
        />
      </View>

      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 15,
          fontStyle: 'italic',
          textDecorationLine: 'underline',
          textAlign: 'center',
          //   marginLeft: 20,
          marginTop: 20,
          textShadowColor: 'magenta',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
        }}>
        The God-King and the Thor of Indian Mythology, Indra has been portrayed
        on the silver screen by many renowned actors. Without many exceptions,
        we have seen him running helter-skelter for help and he also attracts
        relatively lesser religious significance. The one who wields a Vajra, a
        powerful weapon made of thunder and rides on an elephant, Lord Indra too
        is a revered warrior and is known for challenging almost all the forms
        of Devas and Asuras. While much isn’t known or written about the origin
        or the history of Indra, it would be delightful to watch his mere
        presence and a story focused on him as the central character, probably
        for the first time
      </Text>
      {/* Lord Ganesha */}
      <Text
        style={{
          color: 'yellow',
          fontWeight: 'bold',
          fontSize: 25,
          fontStyle: 'italic',
          textDecorationLine: 'underline',
          textAlign: 'center',
          //   marginLeft: 20,
          marginTop: 20,
          textShadowColor: 'red',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
        }}>
        Lord Ganesha
      </Text>
      <View>
        <Image
          source={{
            uri: 'https://thecinemaholic.com/wp-content/uploads/2017/10/ganesha.jpg',
          }}
          style={{
            shadowColor: 'greenyellow',
            elevation: 55,
            borderRadius: 20,
            width: 320,
            height: 250,
            marginLeft: 35,
            marginTop: 30,
          }}
        />
      </View>

      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 15,
          fontStyle: 'italic',
          textDecorationLine: 'underline',
          textAlign: 'center',
          //   marginLeft: 20,
          marginTop: 20,
          textShadowColor: 'magenta',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
        }}>
        One of the most devoutly followed deities across many cultures and
        religions, Lord Ganesha is known primarily for his intelligence and
        wisdom. The God of Learning and remover of obstacles, his
        super-strengths are his patience, his knowledge (He wrote the epic
        Mahabharata btw, whilst sage Veda Vyasa dictated) and his skill with
        letters and words. Lord Ganesha’s presence in a movie would mean fun and
        frolic, combined with some divine nerdiness. Not just that, Lord Ganesha
        has also incarnated himself in the form of 8 avatars to slay the asuras
        of greed, lust, anger etc. So basically, Lord Ganesha’s cinematic
        journey would be a complete package and truly the one symbolising zenith
        of awesomeness. Sounds neat?
      </Text>
      <Text
        style={{
          color: 'yellow',
          fontWeight: 'bold',
          fontSize: 25,
          fontStyle: 'italic',
          textDecorationLine: 'underline',
          textAlign: 'center',
          //   marginLeft: 20,
          marginTop: 20,
          textShadowColor: 'red',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
        }}>
        Lord Rama
      </Text>
      <View>
        <Image
          source={{
            uri: 'https://thecinemaholic.com/wp-content/uploads/2017/10/Rama.jpeg',
          }}
          style={{
            shadowColor: 'greenyellow',
            elevation: 55,
            borderRadius: 20,
            width: 320,
            height: 250,
            marginLeft: 35,
            marginTop: 30,
          }}
        />
      </View>

      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 15,
          fontStyle: 'italic',
          textDecorationLine: 'underline',
          textAlign: 'center',
          //   marginLeft: 20,
          marginTop: 20,
          textShadowColor: 'magenta',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
        }}>
        Lord Shri Rama is certainly one of the most celebrated, widely known and
        highly regarded Indian mythological superheroes and one of my
        favourites. Despite all odds, having spent 14 years in exile along with
        his younger brother Lakshmana and facing the separation from his wife
        Sita, Rama’s story is all relatable yet intriguing. We have already seen
        many actors play this glorious role on television or the 70mm screen,
        yet the sheer scale of Lord Rama hasn’t been portrayed yet, in my
        opinion. Lord Rama is an extremely fearsome warrior, armed with a bow
        and a volley of arrows and a symbol of prudence and pluck. The duels,
        the spells and the story are all inspiring enough for him to deserve his
        own big-budget movie, at the least. Don’t you think?
      </Text>

    
    </ScrollView>
  );
};

export default Mythology;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
