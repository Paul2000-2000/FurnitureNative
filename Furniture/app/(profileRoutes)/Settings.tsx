
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { router } from 'expo-router'

import Checkbox from 'expo-checkbox'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
import stylePages from '../../assets/styles/pageStyle'
import styleHeader from '../../assets/styles/headerStyle'

export default function Settings() {


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
                    <Text style={styleHeader.upDivText}>Settings</Text>
            </View>
            <View style={styles.settingsHe}>
                    <Text style={styles.settingHelabel}>
                        Shipping Address
                    </Text>
                    <TouchableOpacity>
                        <AntDesign name='edit' size={15}/>
                    </TouchableOpacity>
            </View>
            <View style={styles.addressInfoW}>
                    <Text style={styles.adressLabel}>
                       Name
                    </Text>
                    <Text style={styles.addressValueW}>
                        Bruno Pham
                    </Text>
            </View>
            <View style={styles.addressInfoW}>
                    <Text style={styles.adressLabel}>
                        Email
                    </Text>
                    <Text style={styles.addressValueW}>
                        bruno203@gmail.com
                    </Text>
            </View>
            <View style={styles.settingsHe}>
                    <Text style={styles.settingHelabel}>
                        Password
                    </Text>
                    <TouchableOpacity>
                        <AntDesign name='edit' size={15}/>
                    </TouchableOpacity>
            </View>
            <View style={styles.addressInfoW}>
                    <Text style={styles.adressLabel}>
                        Name
                    </Text>
                    <Text style={styles.addressValueW}>
                        **********
                    </Text>
            </View>

            <Text style={styles.settingHelabel}>
                Notifications
            </Text>
            <View style={styles.settingsHeDown}>
                    <Text style={styles.addressValueW}>
                        Sales
                    </Text>
                    <Checkbox aria-checked={true}/>
            </View>
            <View style={styles.settingsHeDown}>
                    <Text style={styles.addressValueW}>
                        New arrivals
                    </Text>
                    <Checkbox aria-checked={true}/>
            </View> 
            <View style={styles.settingsHeDown}>
                    <Text style={styles.addressValueW}>
                        Delivery status changes
                    </Text>
                    <Checkbox aria-checked={true}/>
            </View>      
            <Text style={styles.settingHelabel}>
                Help Center
            </Text>
            <View style={styles.settingsHeDown}>
                    <Text style={styles.addressValueW}>
                        FAQ
                    </Text>
                    <TouchableOpacity >
                                <SimpleLineIcons name='arrow-right' size={20}/>
                    </TouchableOpacity>
            </View> 
            <View style={styles.settingsHeDown}>
                    <Text style={styles.addressValueW}>
                       Contact us
                    </Text>
                    <TouchableOpacity >
                                <SimpleLineIcons name='arrow-right' size={20}/>
                    </TouchableOpacity>
            </View> 
            <View style={styles.settingsHeDown}>
                    <Text style={styles.addressValueW}>
                        Privacy & Terms
                    </Text>
                    <TouchableOpacity >
                                <SimpleLineIcons name='arrow-right' size={20}/>
                    </TouchableOpacity>
            </View> 
        </ScrollView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  
      settingsHe:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      settingsHeDown:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#F8F8FF',
        padding:15
      },
      settingHelabel:{
        fontSize:18,
        color:'grey'
      },
      addressInfoW:{
        padding:10,
        flexDirection:'column',
        gap:10,
        backgroundColor:'#F8F8FF'
      },
      adressLabel:{
        color: "#808080",
        fontSize:14
      },
      addressValueW:{
        fontWeight:'bold',
        fontSize:16
      },
})