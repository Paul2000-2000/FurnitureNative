

import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { router } from 'expo-router'

import { SimpleLineIcons } from '@expo/vector-icons'
import stylePages from '../../assets/styles/pageStyle'
import styleHeader from '../../assets/styles/headerStyle'
import styleButton from '../../assets/styles/buttonStyle'


const navigateShippingAdress = () =>{
    router.push('/(profileRoutes)/ShippingAddress')
}


export default function AddShippingAdress() {
  return (
    <SafeAreaProvider style={stylePages.containerGlobal}>
        <View style={styles.content}>
            <View style={styleHeader.upDivGa}>
                    <TouchableOpacity onPress={() => navigateShippingAdress()}>
                         <SimpleLineIcons name="arrow-left" size={20} />
                    </TouchableOpacity>
                     <Text style={styleHeader.upDivText}>Add shipping address</Text>
            </View>
            <View style={styles.addressInfo}>
                    <Text style={styles.adressLabel}>
                        Full name
                    </Text>
                    <Text style={styles.addressValue}>
                        Ex: Bruno Pham
                    </Text>
            </View>
            <View style={styles.addressInfo}>
                    <Text style={styles.adressLabel}>
                        Address
                    </Text>
                    <Text style={styles.addressValue}>
                        Ex: 25 Robert Latouche Street
                    </Text>
            </View>
            <View style={styles.addressInfoW}>
                    <Text style={styles.adressLabel}>
                        Zipcode (Postal Code)
                    </Text>
                    <Text style={styles.addressValueW}>
                        Pham Cong Thanh
                    </Text>
            </View>
            <View style={styles.addressInfo}>
                    <Text style={styles.adressLabel}>
                        Country
                    </Text>
                    <Text style={styles.addressValue}>
                        Select Country
                    </Text>
            </View>
            <View style={styles.addressInfoW}>
                    <Text style={styles.adressLabel}>
                        City
                    </Text>
                    <Text style={styles.addressValueW}>
                        New York
                    </Text>
            </View>
            <View style={styles.addressInfo}>
                    <Text style={styles.adressLabel}>
                        District
                    </Text>
                    <Text style={styles.addressValue}>
                        Select District
                    </Text>
            </View>
            <TouchableOpacity style={[styleButton.ActionButton, styles.ActionPos]} onPress={() => navigateShippingAdress()}>
                <Text style={styleButton.ActionButtonText}>SAVE ADDRESS</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    content:{
        flexDirection:'column',
        gap:15,
        padding:30,
        flex:1,
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
    
     
})