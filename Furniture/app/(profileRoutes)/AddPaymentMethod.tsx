

import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { router } from 'expo-router'

import { SimpleLineIcons } from '@expo/vector-icons'
import stylePages from '../../assets/styles/pageStyle'
import styleHeader from '../../assets/styles/headerStyle'
import stylesButton from '../../assets/styles/buttonStyle'



export default function AddPaymentMethod() {

    const navigatePaymentMethods = () =>{
        router.push('/(profileRoutes)/PaymentMethod')
    }
    


  return (
    <SafeAreaProvider style={stylePages.containerGlobal}>
        <View style={styles.content}>
            <View style={styleHeader.upDivGa}>
                    <TouchableOpacity onPress={() => navigatePaymentMethods()}>
                         <SimpleLineIcons name="arrow-left" size={20} />
                    </TouchableOpacity>
                     <Text style={styleHeader.upDivText}>Add payment method</Text>
            </View>
            <View style={styles.card}>
    <Image source={require('.././../assets/images/payment/caardPayment.png')} style={styles.Image}/>
    <Text>
        **** **** **** XXXX
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
            XXXXXXXX
        </Text>
        <Text style={styles.paymentInfoValue}>
             XX/XX
        </Text>
    </View>
     </View>
            <TouchableOpacity style={[stylesButton.ActionButton, styles.ActionPos]} onPress={() => navigatePaymentMethods()}>
                <Text style={stylesButton.ActionButtonText}>ADD NEW CARD</Text>
            </TouchableOpacity>
            <View style={styles.addressInfo}>
                    <Text style={styles.adressLabel}>
                        CardHolder Name
                    </Text>
                    <Text style={styles.addressValue}>
                        Ex: Bruno Pham
                    </Text>
            </View>
            <View style={styles.addressInfoW}>
                    <Text style={styles.adressLabel}>
                        Card Number
                    </Text>
                    <Text style={styles.addressValueW}>
                        **** **** **** 3456
                    </Text>
            </View>
            <View style={styles.cvvExp}>
                <View style={styles.cvv}>
                    <Text style={styles.adressLabel}>
                        CVV
                    </Text>
                    <Text style={styles.addressValue}>
                        EX: 123
                    </Text>
                </View>
                <View style={styles.exp}>
                    <Text style={styles.adressLabel}>
                        Expiration Date
                    </Text>
                    <Text style={styles.addressValueW}>
                        03/22
                    </Text>
                </View>
            </View>
        </View>

    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    content:{
        flexDirection:'column',
        gap:20,
        padding:30,
        flex:1,
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

      addressInfo:{
        padding:10,
        flexDirection:'column',
        gap:10,
        backgroundColor:'#cad0db'
      },
      addressInfoW:{
        padding:10,
        flexDirection:'column',
        gap:10,
        backgroundColor:'white'
      },
      adressLabel:{
        color: "#808080",
        fontSize:14
      },
      addressValue:{
        color:'grey',
        fontSize:16
      },
      addressValueW:{
        fontWeight:'bold',
        fontSize:16
      },


      ActionPos:{
        position:'absolute',
        bottom:25,
      },


      cvvExp:{
        flexDirection:'row',
        gap:25,
        justifyContent:'center'
      },
      cvv:{
        width:150,
        height:65,
        paddingVertical:5,
        paddingHorizontal:10,
        flexDirection:'column',
        gap:5,
        backgroundColor:'#cad0db'
      },
      exp:{
        width:150,
        height:65,
        paddingVertical:5,
        paddingHorizontal:10,
        flexDirection:'column',
        gap:5,
        backgroundColor:'white'
      }
})