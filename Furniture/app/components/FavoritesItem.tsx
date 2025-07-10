
import React from 'react'

import { StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons'





export default function FavoritesItem() {



  return (
    <View style={styles.FavoritesItem}>
      <Image source={require('../../assets/images/favorites/Table.png')} style={styles.FavoritesImage}/>
      <View style={styles.FavoritesInfo}>
        <Text style={styles.FavoritesName}>
            Coffee Table
        </Text>
        <Text style={styles.FavoritesPrice}>
            $ 50.00
        </Text>
      </View>
      <View style={styles.FavoritesActions}>
            <TouchableOpacity>
                <AntDesign name='close' size={20}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name='plus' size={20}/>
            </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    FavoritesItem:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:20,
        borderBottomWidth:1,
        borderBottomColor:'grey'
    },
    FavoritesImage:{
        width:100,
        height:100,
        resizeMode:'cover',
    },
    FavoritesInfo:{
        display:'flex',
        flexDirection:'column',
        gap:15,
    },
    FavoritesName:{
        fontSize:16,
        color:'grey'
    },
    FavoritesPrice:{
        fontSize:18,
        color:'black',
        fontWeight:500,
    },
    FavoritesActions:{
        display:'flex',
        flexDirection:'column',
        gap:35,
        alignItems:'flex-end'
    }
})