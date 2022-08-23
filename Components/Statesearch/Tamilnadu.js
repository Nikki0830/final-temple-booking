import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {tamilnaduData} from '../../db';
// import {TouchableOpacity} from 'react-native-gesture-handler';

const Tamilnadu = ({navigation}) => {
  // console.log(data);
  // const [search, setSearch] = useState('');

  // const handleChange = e => {
  //   setSearch(e.target.value);
  // };

  // const filterName = data.filter(
  //   ele => ele.temple.tamilnadu.ttemple_name,
  //   // .toLowerCase()
  //   // .includes(search.toLowerCase()),
  // );

  // console.log('filter', filterName);
  //   const filterName = data.temple.tamilnadu.temple_name;
  //   console.log('filterName', filterName);
  return (
    <View style={styles.container}>
      {/* <TextInput
        style={styles.input}
        placeholder="Search..."
        autoCapitalize="none"
        placeholderTextColor="red"
        // onChangeText={handleChange}
        // value={search}
      /> */}

      {/* {filterName.map(element => {
        return (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
              <Text style={{color: 'white'}}>
                {element.temple.tamilnadu.ttemple_name.tm}
              </Text>
            </TouchableOpacity>
       
            <Text style={{color: 'white'}}>
              {element.temple.tamilnadu.ttemple_name.ts}
            </Text>
            <Text style={{color: 'white'}}>
              {element.temple.tamilnadu.ttemple_name.tb}
            </Text>
          </View>
        );
      })} */}
      <FlatList
        data={tamilnaduData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
            <View style={styles.item}>
              <Text
                style={{
                  color: 'yellow',
                  fontWeight: 'bold',
                  fontSize: 18,
                  fontStyle: 'italic',
                  textAlign:"center",
                  marginTop:30,
                  textShadowColor: 'red',
                  textShadowOffset: {width: 2, height: 2},
                  textShadowRadius: 5,
                }}>
                {item.name}
              </Text>
              <Image
                source={{uri: item.image}}
                style={{
                  width: 120,
                  height: 100,
                  marginLeft:140,
                  marginTop:10,
                  elevation:55,
                  shadowColor:"yellow"
                }}
              />
            </View>
          </TouchableOpacity>
        )}
      />
      <Text>Tamilnadu</Text>
    </View>
  );
};

export default Tamilnadu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // color:"white"
  },
  input: {
    // backgroundColor: 'white',
    // height: 30,
    width: 300,
    height: 52,
    marginTop: 30,
    borderWidth: 2,
    fontStyle: 'italic',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'red',
    borderRadius: 5,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 50,
    color: 'red',
    textShadowColor: 'red',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
});
