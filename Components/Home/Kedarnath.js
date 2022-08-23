import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
// import { WebView } from 'react-native-webview';
// import {kedarnathData} from '../../db';
import Icon from 'react-native-vector-icons/FontAwesome';

const Kedarnath = () => {
  const [images, setimages] = useState([
    require('../assets/Images/kedarnath.jpg'),

    require('../assets/Images/badrinath.jpg'),
    require('../assets/Images/golden.jpg'),
    require('../assets/Images/ajmer.jpg'),
    require('../assets/Images/somnath.jpg'),
    require('../assets/Images/basilica.jpg'),
    require('../assets/Images/krishna.jpg'),
    require('../assets/Images/konark.jpg'),
    require('../assets/Images/amarnath.jpg'),

    // require('../assets/Images/jagannath.jpg'),
    // require('../assets/Images/Ram.jpg'),
  ]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 30,
          fontStyle: 'italic',
          textDecorationLine: 'underline',
          textAlign: 'center',
          marginTop: 20,
          textShadowColor: 'red',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
        }}>
        Kedarnath Temple
      </Text>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={({item, index}) => (
          <Image
            source={item} /* Use item to set the image source */
            key={index} /* Important to set a key for list items,
                       but it's wrong to use indexes as keys, see below */
            style={{
              width: 380,
              height: 250,
              borderWidth: 2,
              // borderColor: '#d35647',
              elevation: 5,
              shadowColor: 'greenyellow',
              // shadowColor: '#30C1DD',
              shadowRadius: 10,
              shadowOpacity: 0.6,
              resizeMode: 'contain',
              margin: 8,
              borderRadius: 5,
              marginTop: 30,
              elevation: 55,
              shadowColor: 'pink',
            }}
          />
        )}
      />
      <Text
        style={{
          color: 'white',
          fontSize: 69,
          textAlign: 'center',
          marginTop: -50,
          textShadowColor: 'white',
          // textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
        }}>
        ...
      </Text>

      <Text
        style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
          marginTop: 5,
          fontStyle: 'italic',
          fontWeight: 'bold',
          textShadowColor: 'red',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
        }}>
        Kedarnath Temple (Sanskrit: केदारनाथ मंदिर, IAST: Kēdāranātha Mandira,
        lit. 'temple of the God of the field') is a Hindu temple dedicated to
        Shiva. The temple is located on the Garhwal Himalayan range near the
        Mandakini river, in the state of Uttarakhand, India.
      </Text>
      {/* <WebView source={{ uri: 'https://reactnative.dev/' }} />; */}
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 25,
          fontStyle: 'italic',
          textDecorationLine: 'underline',
          // textAlign: 'left',
          marginLeft: 20,
          marginTop: 20,
          textShadowColor: 'red',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
        }}>
        Related temples
      </Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={({item, index}) => (
          <Image
            source={item} /* Use item to set the image source */
            key={index} /* Important to set a key for list items,
                       but it's wrong to use indexes as keys, see below */
            style={{
              width: 120,
              height: 150,
              borderWidth: 2,
              // borderColor: '#d35647',
              elevation: 5,
              shadowColor: 'greenyellow',
              // shadowColor: '#30C1DD',
              shadowRadius: 10,
              shadowOpacity: 0.6,
              resizeMode: 'contain',
              margin: 8,
              borderRadius: 5,
              marginTop: 30,
              elevation: 55,
              shadowColor: 'pink',
            }}
          />
        )}
      />
      <Icon
        name="location-arrow"
        style={{
          color: 'red',
          fontSize: 18,
          marginLeft: 6,
          fontWeight: 'bold',
          marginTop: 5,
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Kedarnath')}>
        <Text
          style={{
            color: 'greenyellow',
            marginLeft: 26,
            marginTop: -20,
            fontSize: 15,
            fontWeight: 'bold',
            textShadowColor: 'red',
            textShadowOffset: {width: 2, height: 2},
            textShadowRadius: 5,
          }}>
          Kedarnath,
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color: 'yellow',
          marginLeft: 25,
          marginTop: 3,
          fontSize: 12,
          fontWeight: 'bold',
          textShadowColor: 'red',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
        }}>
        Uttarakhand
      </Text>
      <Icon
        name="location-arrow"
        style={{
          color: 'red',
          fontSize: 18,
          marginLeft: 150,
          fontWeight: 'bold',
          marginTop: -35,
          textShadowColor: 'red',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
        }}
      />
      <Text
        style={{
          color: 'greenyellow',
          marginLeft: 170,
          marginTop: -22,
          fontSize: 15,
          fontWeight: 'bold',
          textShadowColor: 'red',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
        }}>
        Badrinath,
      </Text>
      <Text
        style={{
          color: 'yellow',
          marginLeft: 170,
          // marginTop: 3,
          fontSize: 12,
          fontWeight: 'bold',
          textShadowColor: 'red',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
        }}>
        Uttarakhand
      </Text>
      <Icon
        name="location-arrow"
        style={{
          color: 'red',
          fontSize: 18,
          marginLeft: 290,
          fontWeight: 'bold',
          marginTop: -32,
        }}
      />
      <Text
        style={{
          color: 'greenyellow',
          marginLeft: 310,
          marginTop: -20,
          fontSize: 15,
          fontWeight: 'bold',
          textShadowColor: 'red',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
        }}>
        G Temple,
      </Text>
      <Text
        style={{
          color: 'yellow',
          marginLeft: 300,
          // marginTop: 3,
          fontSize: 12,
          fontWeight: 'bold',
          textShadowColor: 'red',
          textShadowOffset: {width: 2, height: 2},
          textShadowRadius: 5,
        }}>
        Amritsar,Punjab
      </Text>
    </View>
  );
};

export default Kedarnath;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
