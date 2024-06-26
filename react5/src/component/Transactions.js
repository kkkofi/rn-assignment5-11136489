import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export const Transactions = ({isDarkTheme}) => {

    

  const textColor = isDarkTheme ? 'white' : '#000';
  const cardBackgroundColor = isDarkTheme ? '#161622' : '#fff';
  const imageBackgroundColor = isDarkTheme ? '#1e1e2d' : '#fff';

    const transactionData  = [
        {id: '1', title: 'Apple Store', category: 'Entertainment', amount:'-$5,99', image: isDarkTheme? require('../../assets/wapple.png'): require('../../assets/apple.png') },
        {id: '2', title: 'Spotify', category: 'Music', amount:'-$12,99', image: require('../../assets/spotify.png')},
        {id: '3', title: 'Money Transfer', category: 'Transaction', amount:'$300', image: isDarkTheme? require('../../assets/wd.png'): require('../../assets/apple.png')},
        {id: '4', title: 'Grocery', category: 'Music', amount:'-$88', image: require('../../assets/grocery.png')}
    ]

  return (
    <View style={styles.container}>
        <View style={styles.transactionTitleView}>
            <Text style={[styles.title, {color: textColor}]}>Transaction</Text>
            <Text style={styles.subtitle}>Sell All</Text>
        </View>

        <ScrollView style={styles.scrollview} contentContainerStyle = {styles.scrollviewContent}>
            {transactionData.map((transactions, index) =>(
                <View key={index} style={[styles.transactionView, {backgroundColor: cardBackgroundColor, borderColor: '#161622'}]}>
                    
                    <View style={styles.transactionSection}>

                        <View style={styles.transactionImageAndTitle}>
                            
                            <View style={[styles.transactionImageBackground, {backgroundColor: imageBackgroundColor}]}>

                                <Image
                               style={styles.transactionImage}
                                source={transactions.image}
                                />
                            </View>
                            <View style={styles.transactionTitleSection}>
                                <Text style={[styles.transactionTitle, {color: textColor}]}>{transactions.title}</Text>
                                <Text style={styles.category}>{transactions.category}</Text>
                            </View>
                        </View>
                        <View style={styles.transactionsAmount}>
                            <Text style={[styles.transactionTitle, {color: textColor}]}>{transactions.amount}</Text>
                        </View>
                    </View>
                </View>
            ))}







        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#0786db'
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
    transactionTitleView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 45
    },scrollView: {
        paddingTop: 10,
        width: '100%',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    transactionSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    transactionImageAndTitle: {
        flexDirection: 'row',
    },
    transactionView: {
        height: 80,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'white',
        borderColor: 'white',
        justifyContent: 'center'
    },
    transactionImageBackground: {
        backgroundColor: "#ecedea",
        height: 65,
        width: 65,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        marginRight:10,
    },
    icon: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
    transactionTitleSection: {
        paddingTop: 10,
        paddingRight: 50,
    },
    transactionTitle: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    category: {
        textAlign: 'left',
        fontSize: 16,
        color: 'grey',
        paddingLeft: 10,
        paddingTop: 10,
    },
    transactionsAmount: {
        paddingTop: 10
    }

})
