import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const StatisticsScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}> StatisticsScreen</Text>
       
        </View>
  )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'

    },
    text: {
        textAlign: 'center'
    }
})