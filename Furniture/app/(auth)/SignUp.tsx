
import React from 'react'

import {  SafeAreaProvider} from "react-native-safe-area-context";
import { StyleSheet, Text, View , Image , TouchableOpacity , TextInput } from 'react-native'

import axios from 'axios'
import { useState } from 'react';
import { router } from 'expo-router';

import styleGlobal from "../../assets/styles/pageStyle"
import stylesButton from '../../assets/styles/buttonStyle';


export default function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmedPassword , setConfirmedPassword] = useState('');

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const navigateLoginPage = () =>{
       router.push('/(auth)/LogIn')
      }

    const handleRegisterUser = async () =>{

        console.log('Se intampla asta!');
        
        const newErrors = {} as { [key: string]: string };

        if (!name.trim()) newErrors.name = "Name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        if (!password.trim()) newErrors.password = "Password is required";
        if (!confirmedPassword.trim()) newErrors.confirmedPassword = "Confirmation is required";
        else if (password !== confirmedPassword) newErrors.confirmedPassword = "Passwords do not match";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return; 
        }

        const payload ={
            name,
            email,
            password,
            confirmedPassword
        }

        console.log(payload);
        try{

            const response = await axios.post('http://192.168.0.102:8080/add-user', payload);
            if (response.status === 200)
                {
                    console.log('worked')
                    alert('User registered successfully');
                    router.push('/(auth)/LogIn')
                }

            } catch (error) {
                alert('Something went wrong');
                console.log('Request failed:', error); 
            }

    }

  return (
    
    <SafeAreaProvider style={styleGlobal.containerGlobal}>
        <View style={styles.content}>

        <View style={styles.upDiv}>
            <View style={styles.line}/>
            <Image source={require('../../assets/images/SignGroup.png')} />
            <View style={styles.line}/>
        </View>

        <Text style={styles.heading}>
            Welcome
        </Text>

        <View style={styles.form}>
            <Text style={styles.inputHeader}>Name</Text>
            <TextInput placeholder='Enter your name'
            placeholderTextColor="#888"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(text) => setName(text)}
            />
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
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
           <Text style={styles.inputHeader}>Confirm Password</Text>
           <TextInput placeholder='Confirm your password'
            placeholderTextColor="#888"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            value={confirmedPassword}
            onChangeText={(text) => setConfirmedPassword(text)} 
            />
            {errors.confirmedPassword && <Text style={styles.errorText}>{errors.confirmedPassword}</Text>}
            <TouchableOpacity style={[stylesButton.ActionButton, styles.Dim]} onPress={ () => handleRegisterUser() }>
                <Text style={stylesButton.ActionButtonText}> SIGN UP </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signArea} onPress={ () => navigateLoginPage() }>
                <Text>Already have an account?</Text>
                <Text style={styles.action}>Sign In</Text>
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
    heading:{
        fontSize:30,
        fontWeight:'bold',
        fontFamily:'Merriweather',
        textTransform:'uppercase',
        alignSelf:'flex-start'
    },
    form:{
        height:500,
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
      button:{
        paddingVertical:15,
        paddingHorizontal:70,
        borderRadius:10,
        backgroundColor:'#242424',
        alignSelf:'center'
       },
       buttonText:{
        fontSize:18,
        color:'white'
       },
       signArea:{
        flexDirection:'row',
        alignSelf:'center',
        gap:7
      },
      action:{
        color:"#4E352F",
        textTransform:'uppercase',
        fontWeight:'bold',
        
      },
      Dim:{
        width:'85%'
      },

      errorText: {
        color: 'red',
        fontSize: 14,
        marginLeft: 10,
      },
})