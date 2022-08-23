import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Navbar from '../Navbar/Navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

// import Carousel from 'react-native-snap-carousel';

const Home = ({navigation}) => {
  const [images, setimages] = useState([
    require('../assets/Images/amarnath.jpg'),
    require('../assets/Images/badrinath.jpg'),
    require('../assets/Images/golden.jpg'),
    require('../assets/Images/ajmer.jpg'),
    require('../assets/Images/somnath.jpg'),
    require('../assets/Images/basilica.jpg'),
    require('../assets/Images/krishna.jpg'),
    require('../assets/Images/konark.jpg'),
    require('../assets/Images/kedarnath.jpg'),
    require('../assets/Images/jagannath.jpg'),
    require('../assets/Images/Ram.jpg'),
  ]);

  return (
    <>
      <LinearGradient
        colors={['yellow', '#33524d']}
        style={styles.linearGradient}>
        <Navbar />
        {/* //////////////////////////////////////////////////////// */}

        <StatusBar barStyle="light-content" />
      </LinearGradient>
      {/* <View style={{marginTop: 20}}></View> */}

      <ScrollView style={styles.container}>
        {/* <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            /> */}

        {/* <Text>Home</Text> */}
        <View style={styles.templeCon}>
          <Text
            style={{
              color: 'greenyellow',
              fontSize: 25,
              fontStyle: 'italic',
              fontWeight: 'bold',
              marginTop: 10,
              textDecorationLine: 'underline',
              textShadowColor: 'red',
              textShadowOffset: {width: 2, height: 2},
              textShadowRadius: 5,
            }}>
            Temples
          </Text>
          {/* <TouchableOpacity> */}
          {/* <TouchableWithoutFeedback> */}
          <TouchableOpacity
            style={{opacity: 0.9}}
            onPress={() => navigation.navigate('Tshowmore')}>
            <Text
              style={{
                color: 'greenyellow',
                fontSize: 20,
                fontStyle: 'italic',
                fontWeight: 'bold',
                marginLeft: 290,
                marginTop: -25,
                textDecorationLine: 'underline',
                textShadowColor: 'red',
                textShadowOffset: {width: 2, height: 2},
                textShadowRadius: 5,
              }}>
              Show more
            </Text>
          </TouchableOpacity>
          {/* <TouchableWithoutFeedback> */}
          {/* </TouchableOpacity> */}

          <View style={styles.imgContainer}>
            <View style={styles.img1}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScu_d9OWpaeSe_Xw6IZoaD2ELB--R3I8tdcw&usqp=CAU',
                }}
                style={{
                  shadowColor: 'greenyellow',
                  elevation: 55,
                  borderRadius: 5,
                  width: 120,
                  height: 150,
                }}
              />
              <Icon
                name="location-arrow"
                style={{
                  color: 'red',
                  fontSize: 18,
                  // marginLeft: 250,
                  fontWeight: 'bold',
                  marginTop: 5,
                }}
              />
              <Text
                style={{
                  color: 'greenyellow',
                  marginLeft: 20,
                  marginTop: -20,
                  fontSize: 15,
                  fontWeight: 'bold',
                  textShadowColor: 'red',
                  textShadowOffset: {width: 2, height: 2},
                  textShadowRadius: 5,
                }}>
                Venkateswara,
              </Text>
              <Text
                style={{
                  color: 'yellow',
                  marginLeft: 19,
                  marginTop: 3,
                  fontSize: 12,
                  fontWeight: 'bold',
                  textShadowColor: 'red',
                  textShadowOffset: {width: 2, height: 2},
                  textShadowRadius: 5,
                }}>
                Andhra Pradesh,
              </Text>
            </View>
            <View style={styles.img1}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQiiLnjHZSXJyU8uUz9zYBR9rKPhUiK9-aiA&usqp=CAU',
                }}
                style={{
                  width: 120,
                  height: 150,
                  shadowColor: 'greenyellow',
                  elevation: 55,
                  borderRadius: 5,
                }}
              />
              <Icon
                name="location-arrow"
                style={{
                  color: 'red',
                  fontSize: 18,
                  marginLeft: 5,
                  fontWeight: 'bold',
                  marginTop: 5,
                }}
              />
              <Text
                style={{
                  color: 'greenyellow',
                  marginLeft: 28,
                  marginTop: -20,
                  fontSize: 15,
                  fontWeight: 'bold',
                  textShadowColor: 'red',
                  textShadowOffset: {width: 2, height: 2},
                  textShadowRadius: 5,
                }}>
                Taj Mahal,
              </Text>
              <Text
                style={{
                  color: 'yellow',
                  marginLeft: 19,
                  marginTop: 3,
                  fontSize: 12,
                  fontWeight: 'bold',
                  textShadowColor: 'red',
                  textShadowOffset: {width: 2, height: 2},
                  textShadowRadius: 5,
                }}>
                Agra,Uttar Pradesh
              </Text>
            </View>
            <View style={styles.img1}>
              <Image
                source={{
                  uri: 'data:image/jpeg;base64,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',
                }}
                style={{
                  width: 120,
                  height: 150,
                  shadowColor: 'greenyellow',
                  elevation: 50,
                  borderRadius: 5,
                }}
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
              <TouchableOpacity
                onPress={() => navigation.navigate('Kedarnath')}>
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
            </View>
          </View>
        </View>
        <Text
          style={{
            color: 'greenyellow',
            fontSize: 22,
            fontStyle: 'italic',
            fontWeight: 'bold',
            marginTop: 20,
            textDecorationLine: 'underline',
            textShadowColor: 'red',
            textShadowOffset: {width: 2, height: 2},
            textShadowRadius: 5,
          }}>
          Most visited temples
        </Text>
        <View>
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
                }}
              />
            )}
          />
          <Icon
            name="location-arrow"
            style={{
              color: 'red',
              fontSize: 18,
              marginLeft: 1,
              fontWeight: 'bold',
              marginTop: 5,
            }}
          />
          <Text
            style={{
              color: 'greenyellow',
              marginLeft: 20,
              marginTop: -22,
              fontSize: 15,
              fontWeight: 'bold',
              textShadowColor: 'red',
              textShadowOffset: {width: 2, height: 2},
              textShadowRadius: 5,
            }}>
            Amarnath,
          </Text>
          <Text
            style={{
              color: 'yellow',
              marginLeft: 19,
              marginTop: 3,
              fontSize: 12,
              fontWeight: 'bold',
              textShadowColor: 'red',
              textShadowOffset: {width: 2, height: 2},
              textShadowRadius: 5,
            }}>
            Jammu and Kashmir
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
        <View style={styles.content}>
          <Text
            style={{
              color: 'greenyellow',
              fontSize: 20,
              fontStyle: 'italic',
              fontWeight: 'bold',
              marginTop: 25,
              textDecorationLine: 'underline',
              textShadowColor: 'red',
              textShadowOffset: {width: 2, height: 2},
              textShadowRadius: 5,
            }}>
            Read about hindu mythology
          </Text>
          <TouchableOpacity style={{opacity: 0.9}}
          onPress={()=>navigation.navigate('Mythology')}>
            <Text
              style={{
                color: 'greenyellow',
                fontSize: 20,
                fontStyle: 'italic',
                fontWeight: 'bold',
                marginLeft: 290,
                marginTop: -25,
                textDecorationLine: 'underline',
                textShadowColor: 'red',
                textShadowOffset: {width: 2, height: 2},
                textShadowRadius: 5,
              }}>
              Show more
            </Text>
          </TouchableOpacity>
          <View style={styles.imgContainer}>
            <View style={styles.img1}>
              <Image
                source={{
                  uri: 'https://thecinemaholic.com/wp-content/uploads/2017/10/Lord-Indra.jpg',
                }}
                style={{
                  shadowColor: 'greenyellow',
                  elevation: 55,
                  borderRadius: 5,
                  width: 120,
                  height: 150,
                }}
              />
              <Icon
                name="location-arrow"
                style={{
                  color: 'red',
                  fontSize: 18,
                  marginLeft: 9,
                  fontWeight: 'bold',
                  marginTop: 5,
                }}
              />
              <Text
                style={{
                  color: 'greenyellow',
                  marginLeft: 30,
                  marginTop: -25,
                  fontSize: 20,
                  fontWeight: 'bold',
                  textShadowColor: 'red',
                  textShadowOffset: {width: 2, height: 2},
                  textShadowRadius: 5,
                }}>
                Lord Indra
              </Text>
            </View>
            <View style={styles.img1}>
              <Image
                source={{
                  uri: 'https://thecinemaholic.com/wp-content/uploads/2017/10/ganesha.jpg',
                }}
                style={{
                  width: 120,
                  height: 150,
                  shadowColor: 'greenyellow',
                  elevation: 55,
                  borderRadius: 5,
                }}
              />
              <Icon
                name="location-arrow"
                style={{
                  color: 'red',
                  fontSize: 18,
                  marginLeft: 1,
                  fontWeight: 'bold',
                  marginTop: 5,
                }}
              />
              <Text
                style={{
                  color: 'greenyellow',
                  marginLeft: 21,
                  marginTop: -20,
                  fontSize: 16,
                  fontWeight: 'bold',
                  textShadowColor: 'red',
                  textShadowOffset: {width: 2, height: 2},
                  textShadowRadius: 5,
                }}>
                Lord Ganesha
              </Text>
            </View>
            <View style={styles.img1}>
              <Image
                source={{
                  uri: 'https://thecinemaholic.com/wp-content/uploads/2017/10/Rama.jpeg',
                }}
                style={{
                  width: 120,
                  height: 150,
                  shadowColor: 'greenyellow',
                  elevation: 55,
                  borderRadius: 5,
                }}
              />
              <Icon
                name="location-arrow"
                style={{
                  color: 'red',
                  fontSize: 18,
                  marginLeft: 5,
                  fontWeight: 'bold',
                  marginTop: 5,
                }}
              />
              <Text
                style={{
                  color: 'greenyellow',
                  marginLeft: 28,
                  marginTop: -20,
                  fontSize: 17,
                  fontWeight: 'bold',
                  textShadowColor: 'red',
                  textShadowOffset: {width: 2, height: 2},
                  textShadowRadius: 5,
                }}>
                Lord Rama
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  linearGradient: {},
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  imgContainer: {
    // borderWidth: 1,
    // borderColor: 'greenyellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    // flex:1
  },
  // opacity2: {
  //   marginTop: 30,
  //   width: 280,
  //   height: 50,
  //   // backgroundColor:"#ecb72e",
  //   marginLeft: 100,
  //   borderWidth: 3,
  //   borderColor: '#ecb72e',
  //   borderRadius: 50,
  // },
  //   wrapper: {
  //     borderRadius: '50%',
  //   },
});
