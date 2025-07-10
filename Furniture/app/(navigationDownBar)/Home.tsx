
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { router } from 'expo-router'

import CategoryItemHome from '.././components/CategoryItemHome'
import Categories from '.././views/Categories'
import Navbar from '.././views/Navbar'

import { Feather } from '@expo/vector-icons'

import stylePages from '../../assets/styles/pageStyle'
import styleHeader from '../../assets/styles/headerStyle'


const PADDING = 30;

export default function Home() {

    
  const navigateCart = () =>{
    router.push('/(product/order)/Cart');
  }




  return (
    <SafeAreaProvider style={stylePages.containerGlobal}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
            <View style={styleHeader.upDivJf}>
                <Feather name='search' size={35}/>
                <View style={styles.upDivText}>
                    <Text style={styles.upDivT}>Make home Beautifull</Text>
                    <Text style={styles.upDivTT}>Beautifull</Text>
                </View>
                <TouchableOpacity onPress={() => navigateCart()}>
                  <Feather name='shopping-cart' size={35}/>
                </TouchableOpacity>

            </View>
            <View style={{ marginHorizontal: -styles.scrollContainer.paddingHorizontal }}>
                <Categories />
            </View>
            <View style={styles.CategoryItems}>
                <CategoryItemHome/>
                <CategoryItemHome/>
                <CategoryItemHome/>
                <CategoryItemHome/>
                <CategoryItemHome/>
                <CategoryItemHome/>
                <CategoryItemHome/>
                <CategoryItemHome/>
                <CategoryItemHome/>
            </View>

        </View>
      </ScrollView>
      <Navbar/>

    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: PADDING,
        paddingVertical: PADDING,
        backgroundColor: 'white',
        flexGrow: 1,  
      },
      content:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        gap:15
      },
      upDivText:{
        display:'flex',
        flexDirection:'column',
        gap:3,
        alignItems:'center'
      },
      upDivT:{
        color:'grey',
        fontSize:18,
      },
      upDivTT:{
        color:'black',
        fontWeight:'bold',
        fontSize:24,
        textTransform:'uppercase'
      },


      CategoryItems:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        gap:20,
        paddingBottom:60
      }
})