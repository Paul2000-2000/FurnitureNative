
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, Text, TouchableOpacity, View , ScrollView } from 'react-native'

import { router } from 'expo-router'

import Navbar from '.././views/Navbar'
import FavoritesItem from '.././components/FavoritesItem'

import { Feather } from '@expo/vector-icons'

import stylePages from '../../assets/styles/pageStyle'
import styleHeader from '../../assets/styles/headerStyle'
import stylesButton from '../../assets/styles/buttonStyle'

const navigateCart = () =>{
  router.push('/(product/order)/Cart');
}


export default function Favorites() {
  return (
    <SafeAreaProvider style={stylePages.containerGlobal}>
        <ScrollView contentContainerStyle={stylePages.scrollContainer20}>
            <View style={styles.content}>
                <View style={styleHeader.upDivJf}>
                    <Feather name='search' size={30}/>
                    <Text style={styleHeader.upDivText}>Favorites</Text>
                    <TouchableOpacity onPress={() => navigateCart()}>
                        <Feather name='shopping-cart' size={30}/>
                    </TouchableOpacity>
                   
                </View>
                <View style={styles.FavoritesItems}>
                    <FavoritesItem />
                    <FavoritesItem />
                    <FavoritesItem />
                    <FavoritesItem />
                    <FavoritesItem />
                    <FavoritesItem />
                    <FavoritesItem />
                </View>
            </View>
        </ScrollView>
        <TouchableOpacity style={[stylesButton.ActionButton, styles.ActionPos]}>
            <Text style={stylesButton.ActionButtonText}>
                Add all to my cart
            </Text>
        </TouchableOpacity>
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
        paddingTop:30
      },
     
   
      FavoritesItems:{
        display:"flex",
        flexDirection:'column',
        padding:15,
        paddingBottom:150,
        gap:10
      },
      
      ActionPos:{
        position:'absolute',
        bottom:85,
      }
     
})