
import React from 'react'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function OrderItem() {
  return (
    <View style={styles.Order}>
        <View style={styles.OrderNoAndStaBd}>
            <Text style={styles.OrderNumber}>
                Order No238562312
            </Text>
            <Text style={styles.OrderDate}>
                20/03/2020
            </Text>
        </View>
        <View style={styles.OrderQuAndPrice}>
            <Text style={styles.OrderQu}>
                Quantity: <Text style={styles.spanBl}>03</Text>
            </Text>
            <Text style={styles.OrderPr}>
                Total Amount:  <Text style={styles.spanBl}>$150</Text>
            </Text>
        </View>
        <View style={styles.OrderActionAndStatus}>
            <TouchableOpacity style={styles.action}>
                <Text style={styles.actionText}>
                    Detail
                </Text>
            </TouchableOpacity>
            <Text style={styles.OrderStatus}>
                Delivered
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Order:{
        display:'flex',
        flexDirection:'column',
        width:350,
        height:160,
        padding:15,
        justifyContent:'space-between',
        backgroundColor:'#F8F8FF',
    },
    OrderNoAndStaBd:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    OrderQuAndPrice:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    OrderActionAndStatus:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    OrderNumber:{
        fontSize:16,
        fontWeight:'semibold'
    },
    OrderDate:{
        color:'grey',
        fontSize:15
    },
    OrderQu:{
        color:'grey',
        fontSize:15
    },
    OrderPr:{
        color:'grey',
        fontSize:15
    },
    spanBl:{
        color:'black',
        fontWeight:'bold',
    },
    OrderStatus:{
        fontSize:18,
        color:'green'
    },
    action:{
        backgroundColor:'black',
        width:100,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    actionText:{
        fontSize:16,
        color:'white',
        fontWeight:"semibold"
    }
})