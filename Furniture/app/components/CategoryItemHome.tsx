
import React from 'react'

import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'

import { router } from 'expo-router'

export default function CategoryItemHome() {

  const navigateProductPage = () =>{
    router.push('/(product/order)/Product')
  }


  return (
    <TouchableOpacity style={styles.CategoryItem} onPress={() => navigateProductPage()}>
    
                    <Image source={require('./../../assets/images/lamp/LampItem.png')}  style={styles.Image}/>
                    <View >
                      <Text style={styles.itemName}>
                        Black Simple Lamp
                      </Text>
                      <Text style={styles.itemPrice}>
                        $ 12.00
                      </Text>
                    </View>
    
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
        CategoryItem:{
            shadowColor: '#8A959E',
            shadowOffset: { width: 0, height: 7 },
            shadowOpacity: 0.2, 
            shadowRadius: 30,
            elevation: 10, 
            backgroundColor:'#F8F8FF',
            width:165,
            height:255,
            flexDirection:'column',
            justifyContent:'center',
            gap:10,
            paddingLeft:5
        },
        Image:{
            height:175,
            resizeMode:'cover',
        },
        itemName:{
            color:'grey',
            fontSize:14
        },
        itemPrice:{
            color:'black',
            fontSize:14,
            fontWeight:'bold'
        }
        
})