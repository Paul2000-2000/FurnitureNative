
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { router } from 'expo-router';

import styleGlobal from '../../assets/styles/pageStyle'

export default function HomeAdmin() {


    const navigateAddProduct = () =>{
        router.push('/(admin)/AddProductAdmin');
    }


  return (
    <SafeAreaProvider style={styleGlobal.containerGlobal}>
        <View style={styles.adminContent}>
            <Text style={styles.dummyTitle}>Home Admin</Text>

            <TouchableOpacity style={styles.Action} onPress={() => navigateAddProduct()}>
                <Text style={styles.actionText}> Add Product </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    adminContent:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        gap:15
    },
    dummyTitle:{
        fontSize:32,
        fontWeight:'bold'
    },
    Action:{
        padding:10,
        borderRadius:10,
        borderColor:'red',
        borderWidth:2
    },
    actionText:{
        fontSize:16
    }
})