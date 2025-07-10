
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, Text, View , Image , TouchableOpacity } from 'react-native'

import { router } from 'expo-router'

import stylePages from '../../../assets/styles/pageStyle'
import stylesButton from '../../../assets/styles/buttonStyle'


export default function Success() {



    const navigateHome = () => {
        router.push('/(navigationDownBar)/Home');
      };




  return (
    <SafeAreaProvider style={stylePages.containerGlobal}>
        <View style={styles.content}>
            <Text style={styles.successMesage}>Success!</Text>
            <View style={styles.Images}>
                <Image source={require('../../../assets/images/success/furnitureObjects.png')} style={styles.Image}/>
                <Image source={require('../../../assets/images/success/succgre.png')} style={styles.ImageSuc} />
            </View>
            <View style={styles.messages}>
                <Text style={styles.message}>
                    Your order will be delivered soon.
                </Text>
                <Text style={styles.message}>
                    Thank you for choosing our app!
                </Text>
            </View>
            <TouchableOpacity style={stylesButton.ActionButton}>
                        <Text style={stylesButton.ActionButtonText}>Track your orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.HomeActions} onPress={() => navigateHome()}>
                        <Text style={styles.HomeText}>BACK TO HOME</Text>
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
        gap:20,
        justifyContent:'center',
        padding:30
      },
      successMesage:{
        fontSize:40,
        fontWeight:'bold',
        color:'black',
        fontFamily:'Merriweather',
        alignSelf:'center',
        textTransform:'uppercase'
      },
      Images:{
        flexDirection:'column',
        gap:5,
        alignItems:'center'
      },
      Image:{
        width:200,
        resizeMode:'cover'
      },
      ImageSuc:{
        width:42,
        height:42,
        resizeMode:'cover'
      },
      messages:{
        flexDirection:'column',
        gap:5,
        alignItems:'center',
        padding:5,
      },
      message:{
        fontSize:18,
        color:'grey'
      },
      

      HomeActions: {
        height: 55,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      HomeText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
      },

})