
import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Feather ,  MaterialIcons } from '@expo/vector-icons'


export default function RatingReviewItem() {
  return (
    <View style={styles.Item}>
       <View style={styles.ItemNameDate}>
           <MaterialIcons name='person' style={styles.Profile} size={25}/>
            <Text style={styles.Name}>
                 Bruno Fernandes
            </Text>
            <Text style={styles.Date}>
                20/03/2020
            </Text>
        </View>
      <View style={styles.star}>
            <Feather name='star' size={20}/>
            <Feather name='star' size={20}/>
            <Feather name='star' size={20}/>
            <Feather name='star' size={20}/>
            <Feather name='star' size={20}/>
      </View>
      <Text style={styles.message}>
            Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Item:{
        padding:15,
        backgroundColor:'#F8F8FF',
        flexDirection:'column',
        gap:6
    },
    ItemNameDate:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    Name:{
        fontSize:14,
        fontWeight:500
    },
    Date:{
        fontSize:14,
        color:'#grey'
    },
    star:{
        flexDirection:'row',
        gap:10
    },
    message:{
        fontSize:14
    },
    Profile:{
        position: 'absolute',
        top: -30,                    
        left: '50%',                 
        transform: [{ translateX: -20 }], 
        backgroundColor: '#F8F8FF',  
        borderRadius: 20,
        padding: 2,
    }
})