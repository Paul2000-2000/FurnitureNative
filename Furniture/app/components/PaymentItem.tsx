
import React from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';

import Checkbox from 'expo-checkbox';

export default function PaymentItem() {
  return (
    <View style={styles.paymentItem}>
    <View style={styles.card}>
    <Image source={require('./../../assets/images/payment/caardPayment.png')} style={styles.Image}/>
    <Text>
        **** **** **** 1234
    </Text>
    <View style={styles.paymentInfo}>
        <Text style={styles.paymentInfoLabel}>
            Card Holder Name
        </Text>
        <Text style={styles.paymentInfoLabel}>
            Expiry Date
        </Text>
    </View>
    <View style={styles.paymentInfo}>
        <Text style={styles.paymentInfoValue}>
            Jennyfer Doe
        </Text>
        <Text style={styles.paymentInfoValue}>
             05/23
        </Text>
    </View>
    </View>
    <View style={styles.adressUse}>
            <Checkbox />
            <Text style={styles.adressUseText}>
                Use as the shipping address
            </Text>
    </View>
</View>
  )
}

const styles = StyleSheet.create({
    paymentItem:{
        flexDirection:'column',
        gap:15
    },
    Image:{
        width:35,
        height:25,
        resizeMode:'cover',
      },
      card:{
        backgroundColor:'#F8F8FF',
        padding:20,
        flexDirection:'column',
        gap:15,
      },
      paymentInfo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      },
      paymentInfoLabel:{
        fontSize:14
      },
      paymentInfoValue:{
        fontSize:16,
        fontWeight:"bold"
      },
      adressUse:{
        flexDirection:'row',
        gap:15,
        alignItems:'center'
  },
  adressUseText:{
    fontSize:18
  },
})