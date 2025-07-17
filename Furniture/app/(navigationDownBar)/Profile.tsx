
import React, { useState , useEffect } from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { router } from 'expo-router'
import Navbar from '.././views/Navbar'

import { Feather, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import stylePages from '../../assets/styles/pageStyle'
import styleHeader from '../../assets/styles/headerStyle'

export default function Profile() {

  

    const [userData , setUserData] = useState({});

    console.log(userData);
    

    useEffect(() => {
        const fetchUser = async () => {
            const token = await AsyncStorage.getItem('token');
          if (!token) {
            return;
          }
    
          try {
            const response = await axios.get("http://192.168.0.102:8080/getUserInformation", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
    
            if (response.status === 200) {
              setUserData(response.data.user); 
            }
          } catch (err) {
            console.error("Failed to fetch user:", err);
           
          }
        };
    
        fetchUser();
      }, []);
    


    const navigateLogin = () =>{
        router.push('/(auth)/LogIn');
        AsyncStorage.removeItem('token');
    }

    const navigateOrders = () =>{
        router.push('/(profileRoutes)/Orders')
    }

    const navigateShipping = () =>{
        router.push('/(profileRoutes)/ShippingAddress');
    }

    const navigatePaymentMethod = () =>{
        router.push('/(profileRoutes)/PaymentMethod');
    }

    const navigateReview = () =>{
        router.push('/(profileRoutes)/Reviews');
    }

    const navigateSettings = ()=>{
        router.push('/(profileRoutes)/Settings');
    }


  return (
    <SafeAreaProvider style={stylePages.containerGlobal}>
        <View style={styles.content}>
                <View style={styleHeader.upDivJf}>
                    <Feather name='search' size={30}/>
                    <Text style={styleHeader.upDivText}>Profile</Text>
                    <TouchableOpacity onPress={() => navigateLogin()}>
                        <Ionicons name='exit' size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.ProfileInfo}>
                    <Image source={require('../../assets/images/profile/profileimage.png')} style={styles.ProfileImage} />
                    <View style={styles.ProfileText}>
                        <Text style={styles.ProfileName}>
                            {userData?.name ?? 'No name available'}
                        </Text>
                        <Text style={styles.ProfileMail}>
                            {userData?.email ?? 'No email available'}
                        </Text>
                    </View>
                </View>
                <View style={styles.options}>
                        <View style={styles.option}>
                            <View style={styles.optionText}>
                                <Text style={styles.optionTitle}>
                                    My orders
                                </Text>
                                <Text style={styles.number}>
                                    Already have 10 orders
                                </Text>
                            </View>
                            <TouchableOpacity onPress={()=> navigateOrders()}>
                                <SimpleLineIcons name='arrow-right' size={20}/>
                            </TouchableOpacity>
                           
                        </View>
                        <View style={styles.option}>
                            <View style={styles.optionText}>
                                <Text style={styles.optionTitle}>
                                    Shipping Addresses
                                </Text>
                                <Text style={styles.number}>
                                     03 Addresses
                                </Text>
                            </View>
                            <TouchableOpacity onPress={ () => navigateShipping()}>
                                    <SimpleLineIcons name='arrow-right' size={20}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <View style={styles.optionText}>
                                <Text style={styles.optionTitle}>
                                    Payment Method
                                </Text>
                                <Text style={styles.number}>
                                    You have 2 cards
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => navigatePaymentMethod()}>
                                <SimpleLineIcons name='arrow-right' size={20}/>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={styles.option}>
                            <View style={styles.optionText}>
                                <Text style={styles.optionTitle}>
                                    My reviews
                                </Text>
                                <Text style={styles.number}>
                                    Reviews for 5 items
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => navigateReview()}>
                                <SimpleLineIcons name='arrow-right' size={20}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.option}>
                            <View style={styles.optionText}>
                                <Text style={styles.optionTitle}>
                                    Settings
                                </Text>
                                <Text style={styles.number}>
                                    Notification, Password, FAQ, Contact
                                </Text>
                            </View>
                            <TouchableOpacity onPress={ ()=> navigateSettings()}>
                                <SimpleLineIcons name='arrow-right' size={20}/>
                            </TouchableOpacity>
                           
                        </View>
                </View>
        </View>
        <Navbar/>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    content:{
        padding:30,
        flexDirection:'column',
        gap:20,
    },
   

    

      ProfileInfo:{
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        gap:20,
        alignItems:'center'
      },

      ProfileImage:{
        height:100,
        width:100,
        borderRadius:50,
        resizeMode:'cover'
      },
      
      ProfileText:{
        flexDirection:'column',
        gap:7
      },
      ProfileName:{
        fontSize:20,
        fontWeight:'bold'
      },
      ProfileMail:{
        fontSize:14,
        color:'grey'
      },
      options:{
        flexDirection:'column',
        gap:15
      },
      option:{
        backgroundColor:'#F8F8FF',
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      },
      optionText:{
        flexDirection:'column',
        gap:10
      },
      optionTitle:{
        fontSize:20,
        fontWeight:'bold'
      },
      number:{
        fontSize:14,
        color:'grey'
      }
})