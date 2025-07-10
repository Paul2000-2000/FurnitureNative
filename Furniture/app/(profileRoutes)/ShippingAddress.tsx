

import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { router } from 'expo-router';

import AdressItem from '.././components/AdressItem';

import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import stylePages from '../../assets/styles/pageStyle';
import styleHeader from '../../assets/styles/headerStyle'


export default function ShippingAddress() {

    const navigateProfile = () =>{
        router.push('/(navigationDownBar)/Profile')
    }

    const navigateAddShippingAddress = () =>{
        router.push('/(profileRoutes)/AddShippingAdress');
    }
 

  return (
    <SafeAreaProvider style={stylePages.containerGlobal}>
         <ScrollView contentContainerStyle={stylePages.scrollContainer30Ga20}>
            <View style={styleHeader.upDivGa}>
                    <TouchableOpacity onPress={() => navigateProfile()}>
                         <SimpleLineIcons name="arrow-left" size={20} />
                    </TouchableOpacity>
                     <Text style={styleHeader.upDivText}>Shipping address</Text>
             </View>
             <View style={styles.adressList}>
                    <AdressItem />
                    <AdressItem />
                    <AdressItem />
                    <AdressItem />
                    <AdressItem />
                    <AdressItem />
                    <AdressItem />
             </View>
        </ScrollView>
        <TouchableOpacity onPress={() => navigateAddShippingAddress()} style={styles.addAction}>
            <AntDesign name='plus' size={25} />
        </TouchableOpacity>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    
      adressList:{
        flexDirection:'column',
        gap:40
      },
    
      addAction:{
        position: 'absolute',
        bottom: 25,
        right: 25,
        backgroundColor:'#F8F8FF',
        padding:15,
        borderRadius:25,
        zIndex: 1000,        
        elevation: 1000,    
      }
})