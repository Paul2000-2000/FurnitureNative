
import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Checkbox from 'expo-checkbox';
import { AntDesign } from '@expo/vector-icons';

export default function AdressItem() {
  return (
    <View style={styles.adress}>
                            <View style={styles.adressUse}>
                                <Checkbox />
                                <Text style={styles.adressUseText}>
                                    Use as the shipping address
                                </Text>
                            </View>
                            <View style={styles.addressContent}>
                                <View style={styles.addressNameEdit}>
                                    <Text style={styles.adressName}>
                                        Bruno Fernandes
                                    </Text>
                                    <TouchableOpacity >
                                        <AntDesign name='edit' size={15}/>
                                    </TouchableOpacity>
                                </View>
                               <Text style={styles.adressPlace}>
                                        25 rue Robert Latouche, Nice, 06200, Côte D’azur, France
                               </Text>
                            </View>
                    </View>
  )
}

const styles = StyleSheet.create({
    adress:{
        flexDirection:'column',
        gap:15
      },
      adressUse:{
            flexDirection:'row',
            gap:15,
            alignItems:'center'
      },
      adressUseText:{
        fontSize:18
      },
      addressContent:{
        padding:20,
        backgroundColor:'#F8F8FF',
        gap:15
      },
      addressNameEdit:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'grey',
      },
      adressName:{
        fontSize:22,
        fontWeight:'bold'
      },
      adressPlace:{
        fontSize:18,
        color:'grey'
      },
})