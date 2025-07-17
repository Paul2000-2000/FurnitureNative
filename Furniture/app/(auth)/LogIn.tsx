
import React from 'react'

import {  SafeAreaProvider} from "react-native-safe-area-context";
import { StyleSheet, Text, View , Image , TouchableOpacity , TextInput } from 'react-native'

import axios from 'axios'
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { router } from 'expo-router';

import styleGlobal from "../../assets/styles/pageStyle"
import stylesButton from '../../assets/styles/buttonStyle'

export default function LogIn() {

    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleLogin = async () =>{

        const newErrors = {} as { [key: string]: string };

        if (!email.trim()) newErrors.email = "Email is required";
        if (!password.trim()) newErrors.password = "Password is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return; 
        }

        const payload ={  
            email,
            password,
        }

        try{

            const response = await axios.post('http://192.168.0.102:8080/login', payload);
            if (response.status === 200) {

                console.log("Full response data : " ,response.data);
                const token = response.data.token; 
                const role = response.data.role;
                console.log("Rolul este : " , role);
                console.log("Tokenul este : " , token);


                if (token) {
                    AsyncStorage.setItem('token', token)
                  alert("User logged in successfully");

                  if (role === "admin") {
                    router.push("/HomeAdmin");
                  } else {
                    router.push("/Home");
                  }
                  
                } else {
                  alert("Login succeeded but no token received.");
                }
              }
            } catch (error) {
                alert('Something went wrong');
                console.log('Request failed:', error); 
            }

       
      }
    
    const navigateSignUp = () =>{
        router.push('/(auth)/SignUp');
    }


  return (
    
    <SafeAreaProvider style={styleGlobal.containerGlobal}>
        <View style={styles.content}>

        <View style={styles.upDiv}>
            <View style={styles.line}/>
            <Image source={require('../../assets/images/SignGroup.png')} />
            <View style={styles.line}/>
        </View>

        <Text style={styles.headingFirst}>
            Hello !
        </Text>

        <Text style={styles.heading}>
            Welcome Back
        </Text>

        <View style={styles.form}>
          
            <Text style={styles.inputHeader}>Email</Text>
            <TextInput placeholder='Enter your email'
            placeholderTextColor="#888"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
           />
           {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
           <Text style={styles.inputHeader}>Password</Text>
           <TextInput placeholder='Enter your password'
            placeholderTextColor="#888"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <TouchableOpacity >
                <Text style={styles.buttonForgot}> Forgot Password </Text>
            </TouchableOpacity>
         
            <TouchableOpacity style={[stylesButton.ActionButton, styles.Dim]} onPress={ () => handleLogin() }>
                <Text style={stylesButton.ActionButtonText}> Log In </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signArea} onPress={ () => navigateSignUp() }>
                <Text style={styles.action}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        
        </View>
    </SafeAreaProvider>
    
  )
}

const styles = StyleSheet.create({
    content:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:25,
        padding:25,
        backgroundColor:'white',
        flex:1
    },
    upDiv:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:15,
        
    },
    line:{
        width:110,
        borderBottomColor:'grey',
        borderBottomWidth:2,
    },
    headingFirst:{
        color:'grey',
        fontSize:32,
        fontFamily:'Merriweather',
        alignSelf:'flex-start'
    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
        fontFamily:'Merriweather',
        textTransform:'uppercase',
        alignSelf:'flex-start'
    },
    form:{
        height:400,
        width:350,
        display:'flex',
        flexDirection:'column',
        gap:15,
        justifyContent:'center',
        padding:10,
        shadowColor: '#8A959E',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.2, 
        shadowRadius: 30,
        elevation: 10, 
        backgroundColor:'#F8F8FF'
       
    },
    inputHeader:{
        paddingLeft:10,
        fontSize:18,
        fontWeight:'500',
        color:'grey'
      },  
      input:{
        backgroundColor:'#E2BCB7',
        borderRadius:10,
        paddingLeft:15
      },
    
       buttonForgot:{
        fontSize:18,
        color:'black',
        alignSelf:'center'
       },
       signArea:{
        flexDirection:'row',
        alignSelf:'center',
        gap:7
      },
      Dim:{
        width:'95%'
      },
      action:{
        color:"#4E352F",
        textTransform:'uppercase',
        fontWeight:'bold',
        fontSize:18
        
      },
      errorText: {
        color: 'red',
        fontSize: 14,
        marginLeft: 10,
      },
})