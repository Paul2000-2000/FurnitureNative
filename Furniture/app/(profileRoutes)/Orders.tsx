
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, Text, View , ScrollView , TouchableOpacity } from 'react-native'

import { router } from 'expo-router'

import OrderItem from '.././components/OrderItem'
import Navbar from '.././views/Navbar'

import { SimpleLineIcons } from '@expo/vector-icons'
import stylePages from '../../assets/styles/pageStyle'
import styleHeader from '../../assets/styles/headerStyle'

export default function Orders() {

    const navigateProfile = () =>{
        router.push('/(navigationDownBar)/Profile')
    }
 
  return (
    <SafeAreaProvider style={stylePages.containerGlobal}>
        <ScrollView contentContainerStyle={stylePages.scrollContainer30Ga20}>
                <View style={styleHeader.upDivGa}>
                    <TouchableOpacity onPress={() => navigateProfile()}>
                         <SimpleLineIcons name="arrow-left" size={20} />
                    </TouchableOpacity>
                     <Text style={styleHeader.upDivText}>My orders</Text>
                 </View>
                 <View style={styles.statusList}>
                    <TouchableOpacity>
                        <Text style={styles.selectedStatus}>
                            Delivered
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.Status}>
                             Processing
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.Status}>
                             Canceled
                        </Text>
                    </TouchableOpacity>
                 </View>
                 <View style={styles.ordersItems}>
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                        <OrderItem />
                 </View>
        </ScrollView>
        <Navbar/>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
     
      statusList:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      selectedStatus:{
        fontSize:18,
        fontWeight:'bold'
      },
      Status:{
        fontSize:18,
        color:'grey'
      },
      ordersItems:{
        flexDirection:'column',
        gap:15,
        alignItems:'center',
        paddingBottom:70
      }
})