
import React from 'react'

import { StyleSheet, TouchableOpacity, View , Text } from 'react-native'

import { AntDesign, FontAwesome, FontAwesome5   } from '@expo/vector-icons'



export default function Categories() {


    

  return (
    <View style={styles.Categories}>
    <TouchableOpacity style={styles.cateogry}>
             <AntDesign name='star' size={25} />
             <Text style={styles.categoryText}>
                Popular
             </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cateogry}>
             <FontAwesome5 name='chair' size={25} />
             <Text style={styles.categoryText}>
                Chair
             </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cateogry}>
             <FontAwesome name='table' size={25} />
             <Text style={styles.categoryText}>
                Table
             </Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.cateogry}>
             <FontAwesome name='bed' size={25} />
             <Text style={styles.categoryText}>
                Bed
             </Text>
    </TouchableOpacity>
  
   
</View>

  )
}

const styles = StyleSheet.create({
  
    Categories: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:15,
        padding:10,
        paddingVertical:10,
        backgroundColor: '#FFEFE0',
        height: 95,
        zIndex: 1000,        
        elevation: 1000,   
         
      },
      cateogry:{
        flexDirection:'column',
        alignItems: 'center',
        gap:4
      },
      categoryText:{
        color:'grey',
        fontSize:14
      }
})