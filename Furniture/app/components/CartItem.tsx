
import React from 'react'

import { StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native'

import { AntDesign } from '@expo/vector-icons'





export default function CartItem() {



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
        <View style={styles.productQuantity}>
                    <View style={styles.productQunatityAct}>
                        <AntDesign name='plus' size={15}/>
                    </View>
                    <Text style={styles.productQuantityNmb}>
                        01
                    </Text>
                    <View style={styles.productQunatityAct}>
                        <AntDesign name='minus' size={15}/>
                    </View>
                </View>
      </View>
      <View style={styles.FavoritesActions}>
            <TouchableOpacity>
                <AntDesign name='close' size={20}/>
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
        alignItems:'flex-end',
        justifyContent:'flex-start'
    },
    productQandP:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10
    },
    productPrice:{
        fontSize:30,
        fontWeight:'bold',
        fontFamily:'Nunuito-Sans'
    },
    productQuantity:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:15
    },
    productQunatityAct:{
        backgroundColor:'#bec4cf',
        padding:5
    },
    productQuantityNmb:{
        fontSize:18,
        fontWeight:'semibold',
        color:'black'
    },
})