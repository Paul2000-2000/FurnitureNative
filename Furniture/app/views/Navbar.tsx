

import React from 'react'

import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { router } from 'expo-router'

import {  FontAwesome, Ionicons , MaterialIcons } from '@expo/vector-icons'




export default function Navbar() {


    const navigateFavorites = () =>{
      router.push('/(navigationDownBar)/Favorites');
    }  

    const navigateHome = () =>{
      router.push('/(navigationDownBar)/Home');
    }

    const navigateNotifications = () =>{
      router.push('/(navigationDownBar)/Notifications');
    }

    const navigateProfile = () =>{
      router.push('/(navigationDownBar)/Profile');
    }
 

  return (
    <View style={styles.navbarDown}>
    <TouchableOpacity onPress={() => navigateHome()}>
             <FontAwesome name='home' size={25} />
    </TouchableOpacity>
    <TouchableOpacity onPress={ () => navigateFavorites() }>
            <FontAwesome name='save' size={25} />
    </TouchableOpacity>
    <TouchableOpacity onPress={ () => navigateNotifications()}>
             <Ionicons name='notifications' size={25}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={ () => navigateProfile()}>
            <MaterialIcons name='person' size={25} />
    </TouchableOpacity>
</View>

  )
}

const styles = StyleSheet.create({
  
    navbarDown: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical:10,
        backgroundColor: '#FFEFE0',
        height: 65,
        zIndex: 1000,        
        elevation: 1000,    
      },
})