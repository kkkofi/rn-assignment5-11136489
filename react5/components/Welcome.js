import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstthree}>
        <View style={styles.imagecontainer}>
          <Image source={require('../assets/profile.png')} style={styles.image}/>
        </View>

        <View style={styles.maintext}>
          <Text style={styles.text1}>Welcome back,</Text>
           <Text style={styles.text2} >Eric Atsu</Text>
        </View>
          
      </View>
      <View style={styles.searchcontainer}>
      <Image source={require('../assets/search.png')} style={styles.search}/>

      </View >

      <View style={styles.cardcontainer}>
        <Image source={require('../assets/Card.png')} />
      </View>

      



      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    justifyContent: 'space-between',

  },
  firstthree:{
    flexDirection: 'row',

  },
  imagecontainer: {
    marginRight: 20,
  },
  image: {
    width: 70,
    height: 70,
  },
  mainText: {
    flexDirection: 'column',
  },
  text1: {
    fontSize: 18,
    marginBottom: 8,

  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchcontainer: {
    backgroundColor: "#d1d1d1",
    height: 50,
    width: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 270,
    marginTop: -60,
  },
  search: {
    width: 25,
    height: 30,
  },
  cardcontainer: {
    marginTop: 50,
  }
  
});

export default Welcome;