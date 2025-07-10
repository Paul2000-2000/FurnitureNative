
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, Text, TouchableOpacity, View , ScrollView } from 'react-native'


import { router } from 'expo-router'

import Navbar from '.././views/Navbar'
import Notification from '.././components/Notification'

import {  SimpleLineIcons } from '@expo/vector-icons'
import stylePages from '../../assets/styles/pageStyle'
import styleHeader from '../../assets/styles/headerStyle'


export default function Notifications() {

    const navigateHome = () =>{
        router.push('/(navigationDownBar)/Home');
    }


  return (
    <SafeAreaProvider style={stylePages.containerGlobal}>
        <ScrollView style={ stylePages.scrollContainer5 }>
            <View style={styles.content}>
                <View style={styleHeader.upDivGa}>
                    <TouchableOpacity onPress={() => navigateHome()}>
                         <SimpleLineIcons name="arrow-left" size={20} />
                     </TouchableOpacity>
                    <Text style={styleHeader.upDivText}>Notifications</Text>
                 </View>
                <View style={styles.FavoritesItems}>
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                </View>
            </View>
        </ScrollView>
        <Navbar />
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    
      content:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        gap:15,
        paddingTop:30,
        paddingBottom:125
      },
     
      
      
      FavoritesItems:{
        display:"flex",
        flexDirection:'column',
        padding:15,
        gap:10
      },
      
})