import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const MyCardsScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}> My Cards Screen</Text>
       
        </View>
  )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'fff'
    },
    text: {
        textAlign: 'center'
    }
})