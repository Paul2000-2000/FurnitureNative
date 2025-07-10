import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { router } from 'expo-router'

import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
import styleGlobal from '../../../assets/styles/pageStyle'
import styleHeader from '../../../assets/styles/headerStyle'
import stylesButton from '../../../assets/styles/buttonStyle'
const navigateCart = () =>{
  router.push('/(product/order)/Cart');
}

const navigateSuccess = () =>{
    router.push('/(product/order)/Success');
}


export default function Checkout() {
  return (
    <SafeAreaProvider style={styleGlobal.containerGlobal}>
            <View style={styles.content}>
                <View style={styleHeader.upDivGa}>
                    <TouchableOpacity onPress={() => navigateCart()}>
                         <SimpleLineIcons name="arrow-left" size={20} />
                    </TouchableOpacity>
                     <Text style={styleHeader.upDivText}>Check out</Text>
                 </View>
                 <View style={styles.checkoutShipping}>
                    <Text style={styles.checkoutShippingText}>
                        Shipping Address
                    </Text>
                    <TouchableOpacity>
                        <AntDesign name='edit' size={15}/>
                    </TouchableOpacity>
                 </View>
                 <View style={styles.checkoutInfo}>
                    <Text style={styles.checkoutName}>
                        Bruno Fernandes
                    </Text>
                    <Text style={styles.checkoutAddress}>
                        25 rue Robert Latouche, Nice, 06200, Côte D’azur, France
                    </Text>
                 </View>
                 <View style={styles.checkoutPayment}>
                    <View style={styles.checkoutPaymentCardDiv}>
                        <Text style={styles.checkoutShippingText}>
                            Payment
                        </Text>
                        <TouchableOpacity>
                            <AntDesign name='edit' size={15}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.checkoutPaymentCardInfo}>
                        <Image source={require('../../../assets/images/checkout/mastercard.png')} style={styles.Image} />
                        <Text style={styles.cardNumber}>
                            **** **** **** 3947
                        </Text>
                    </View>
                 </View>
                 <View style={styles.checkoutDelivery}>
                    <View style={styles.checkoutDeliveryDiv}>
                        <Text style={styles.checkoutDeliveryText}>
                            Delivery method
                        </Text>
                        <TouchableOpacity>
                            <AntDesign name='edit' size={15}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.checkoutDeliveryInfo}>
                        <Image source={require('../../../assets/images/checkout/Group.png')} style={styles.Image} />
                        <Text style={styles.cardNumber}>
                            Fast (2-3days)
                        </Text>
                    </View>
                 </View>
                 <View style={styles.checkoutMoney}>
                    <View style={styles.checkoutMoneyDiv}>
                        <Text style={styles.checkoutMoneyLabel}>
                            Order:
                        </Text>
                        <Text style={styles.checkoutMoneyValue}>
                            $ 95.00
                        </Text>
                    </View>
                    <View style={styles.checkoutMoneyDiv}>
                        <Text style={styles.checkoutMoneyLabel}>
                            Delivery:
                        </Text>
                        <Text style={styles.checkoutMoneyValue}>
                            $ 5.00
                        </Text>
                    </View>
                    <View style={styles.checkoutMoneyDiv}>
                        <Text style={styles.checkoutMoneyLabel}>
                            Total:
                        </Text>
                        <Text style={styles.checkoutMoneyValue}>
                            $ 105.00
                        </Text>
                    </View>
                 </View>
                 <TouchableOpacity style={[stylesButton.ActionButton, styles.Pos]} onPress={() => navigateSuccess()}>
                        <Text style={stylesButton.ActionButtonText}>SUBMIT ORDER</Text>
                 </TouchableOpacity>
            </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
      content:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        gap:15,
        justifyContent:'flex-start',
        padding:30
      },
    
    
      checkoutShipping:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      checkoutShippingText:{
        fontSize:18,
        color:'grey'
      },
      checkoutDeliveryText:{
        fontSize:18,
        color:'grey'
      },
      checkoutInfo:{
        display:'flex',
        flexDirection:'column',
        gap:15,
        padding:20,
        backgroundColor:'#F8F8FF',
        borderRadius:5
      },
      checkoutName:{
        fontSize:18,
        fontWeight:'bold',
        color:'black'
      },
      checkoutAddress:{
        fontSize:16,
        color:'grey',
      },
      checkoutPayment:{
        flexDirection:'column',
        gap:10,
      },
      checkoutDelivery:{
        flexDirection:'column',
        gap:10,
      },
      checkoutPaymentCardDiv:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10
      },
      checkoutDeliveryDiv:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        
      },
      checkoutPaymentCardInfo:{
        padding:20,
        flexDirection:'row',
        gap:30,
        backgroundColor:'#F8F8FF'
      },
      checkoutDeliveryInfo:{
        padding:20,
        flexDirection:'row',
        gap:30,
        backgroundColor:'#F8F8FF'
      },
      Image:{
        width:35,
        height:25,
        resizeMode:'cover',
      },
      cardNumber:{
        fontSize:14
      },
      checkoutMoney:{
        flexDirection:'column',
        gap:10,
        padding:20,
        backgroundColor:'#F8F8FF',
      },
      checkoutMoneyDiv:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
      },
      checkoutMoneyLabel:{
        fontSize:18,
        color:'grey'
      },
      checkoutMoneyValue:{
        fontSize:18,
        color:'black',
        fontWeight:'bold'
      },
      Pos:{
        position:'absolute',
        bottom:25
      }
      
})