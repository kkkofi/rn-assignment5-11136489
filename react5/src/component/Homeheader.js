import React from 'react';
import {View, StyleSheet, Text, Image} from "react-native";
import { Card } from './Card';
import { Transactions } from './Transactions';


export const Homeheader = ({isDarkTheme}) => {

const headerBackground = isDarkTheme ? '#161622' : '#fff';
  const titleColor = isDarkTheme ? '#ccc' : 'grey';
  const subtitleColor = isDarkTheme ? '#fff' : '#000';
  const iconBackgroundColor = isDarkTheme ? '#1e1e2d' : '#ecedea';

  return (
    <View style={[styles.container, {backgroundColor: headerBackground}]}>
        <View style={styles.header}>
            <View style={styles.box}>
            <Image
                source = {require('../../assets/profile.png')}
                style= {styles.profilePicture}
            /> 
            <View style={styles.userInfo}>
                <Text style={[styles.title, {color: titleColor}]}>Welcome back,</Text>
                <Text style={[styles.subtitle, {color:subtitleColor}]}>Eric Atsu</Text>
            </View>
            <View style={[styles.searchIcons, {backgroundColor: iconBackgroundColor}]}>
                <Image
                    source={isDarkTheme? require('../../assets/w-search.png'): require('../../assets/search.png')}
                />
            </View>
            
            </View>
        </View>

        <View style={styles.card}>
            <Card isDarkTheme={isDarkTheme}/>
        </View>

        <View>
            <Transactions isDarkTheme={isDarkTheme}/>
        </View> 

    </View>
  )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 80,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      box: {
        flexDirection: "row"
      },
      profilePicture: {
        height: 70,
        width: 70,
        marginRight: 20,
      },
      userInfo :{
        marginTop:10,

      },
      title: {
        fontSize: 20,
        paddingBottom: 2,
      },
      subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
      },
      searchIcons: {
        backgroundColor: "#e4ebea",
        borderRadius: 40,
        width:40,
        height:40,
        alignItems: "center",
        justifyContent: "center",
        padding: 35,
        marginLeft: 100
      },
      card: {
        marginTop: 40
      },
})