
import React from 'react'

import { Image, StyleSheet, Text, View } from 'react-native'

import { Feather } from '@expo/vector-icons'

export default function ReviewItem() {
  return (
    <View style={styles.review}>
                        <View style={styles.reviewInfo}>
                            <Image source={require('../../assets/images/lamp/LampItem.png')} style={styles.Image}/>
                            <View style={styles.reviewInfoText}>
                                <Text style={styles.name}>
                                    Minimal Lamp
                                </Text>
                                <Text style={styles.price}>
                                    $ 50.00
                                </Text>
                            </View>
                        </View>
                        <View style={styles.starReviewDate}>
                            <View style={styles.star}>
                                <Feather name='star' size={20}/>
                                <Feather name='star' size={20}/>
                                <Feather name='star' size={20}/>
                                <Feather name='star' size={20}/>
                                <Feather name='star' size={20}/>
                            </View>
                            <Text style={styles.date}>
                                20/03/2020
                            </Text>
                        </View>
                        <Text style={styles.description}>
                        Nice Furniture with good delivery. The delivery time is very fast. Then products look like exactly the picture in the app. Besides, color is also the same and quality is very good despite very cheap price
                        </Text>
                     </View>    
  )
}

const styles = StyleSheet.create({
    review:{
        backgroundColor:'#F8F8FF',
        padding:20,
        flexDirection:'column',
        gap:15,
      },
      reviewInfo:{
        flexDirection:'row',
        gap:15,
        alignItems:'center'
      },
      Image:{
        width:75,
        height:75,
        resizeMode:'cover'
      },
      reviewInfoText:{
        flexDirection:'column',
        gap:10,
      },
      name:{
        fontSize:16,
        color:'grey',
        fontWeight:'semibold'
      },
      price:{
        fontSize:16,
        fontWeight:'bold'
      },
      star:{
        flexDirection:'row',
        gap:5
    },
    starReviewDate:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    date:{
        fontSize:12,
        color:'grey'
    },
    description:{
        color:'grey',
        fontSize:14
    }
})