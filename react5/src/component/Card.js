import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Card = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => {
      setIsDarkTheme(previousState => !previousState);
    };
    
  const cardBackgroundColor = isDarkTheme ? '#161622' : '#000';
  const textColor = isDarkTheme ? 'grey' : '#fff';
  const iconBackgroundColor = isDarkTheme ? '#1e1e2d' : '#ecedea';

  return (
    <View style={styles.container}>
        <Image
            source={require('../../assets/Card.png')}
            style={[styles.card, {backgroundColor: cardBackgroundColor}]}
         />

         <View style={styles.buttonsContainer}>
            <View>
                <TouchableOpacity>
                    <View style={[styles.buttons, {backgroundColor: iconBackgroundColor}]}>
                        <Image
                            source={isDarkTheme? require('../../assets/w-send.png'): require('../../assets/send.png')}
                        />   
                    </View>
                </TouchableOpacity>

                <Text style={[styles.buttonText, {color:textColor}]}>Sent</Text>
            </View>

            <View>
                <TouchableOpacity>
                    <View style={styles.buttons}>
                        <Image
                            source={isDarkTheme? require('../../assets/w-recieve.png'): require('../../assets/recieve.png')}
                        />   
                    </View>
                </TouchableOpacity>

                <Text style={[styles.buttonText,{color:textColor}] }>Receive</Text>
            </View>

            <View>
                <TouchableOpacity>
                    <View style={[styles.buttons, {color:textColor}]}>
                        <Image
                            source={isDarkTheme? require('../../assets/w-loan.png'): require('../../assets/loan.png')}
                        />   
                    </View>
                </TouchableOpacity>

                <Text style={[styles.buttonText, {color:textColor}]}>Loan</Text>
            </View>

            <View>
                <TouchableOpacity>
                    <View style={styles.buttons}>
                        <Image
                            source={isDarkTheme? require('../../assets/w-topUp.png'): require('../../assets/topUp.png')}
                        />   
                    </View>
                </TouchableOpacity>

                <Text style={[styles.buttonText, {color:textColor}]}>Topup</Text>
            </View>
         </View>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    paddingHorizontal: 35,
},
buttons: {
    backgroundColor: "#e4ebea",
    borderRadius: 40,
    width:40,
    height:40,
    alignItems: "center",
    justifyContent: "center",
    padding: 35,
  },
  buttonText: {
    marginLeft:20,
    marginTop:5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 25
  }
})
