
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, Text, TouchableOpacity, View , Image , ScrollView , TextInput} from 'react-native'

import { useState  } from 'react'

import * as ImagePicker from 'expo-image-picker';

import styleGlobal from '../../assets/styles/pageStyle'

export default function AddProductAdmin() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [imageUri, setImageUri] =  useState<string | null>(null);


    const pickImage = async () => {
        
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        // Open image picker
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!pickerResult.canceled) {
          setImageUri(pickerResult.assets[0].uri);
          
        }
      };


     



  return (
    <SafeAreaProvider style={styleGlobal.containerGlobal}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>

            <Text style={styles.titlePage}> ADD A PRODUCT </Text>

            <Text style={styles.inputHeader}>Product Name</Text>
            <TextInput placeholder='Enter product name'
            placeholderTextColor="#888"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(text) => setName(text)}
        
            />

            <Text style={styles.inputHeader}>Product Description</Text>
            <TextInput placeholder='Enter product description'
            placeholderTextColor="#888"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={description}
            onChangeText={(text) => setDescription(text)}
            />


            <Text style={styles.inputHeader}>Product Price</Text>
            <TextInput placeholder='Enter product price'
            placeholderTextColor="#888"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={price}
            onChangeText={(text) => setPrice(text)}
            keyboardType="numeric"
            />


            <Text style={styles.inputHeader}>Product Quantity</Text>
            <TextInput placeholder='Enter product quantity'
            placeholderTextColor="#888"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={quantity}
            onChangeText={(text) => setQuantity(text)}
            keyboardType="numeric"
            />

            <TouchableOpacity  onPress={pickImage} style={styles.action}>
                <Text style={styles.actionText}> Pick an image!</Text>
            </TouchableOpacity>

            {imageUri && (
                <Image source={{ uri: imageUri }} style={styles.image} />
            )}


            <TouchableOpacity style={styles.ActionAddProdcut}>
                <Text style={styles.actionTextdA}> ADD </Text>
            </TouchableOpacity>

            

        </View>
        </ScrollView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    content:{   
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        gap:10,
        flex:1
    },
    scrollContainer: {
        padding:30,
        flexGrow: 1,  
      },
    titlePage:{
        fontSize:45,
        fontWeight:'bold',
        marginBottom:15
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
        padding:15,
        width:255
      },
      image: {
        marginTop: 24,
        width: 200,
        height: 200,
        resizeMode: 'cover',
        alignSelf: 'center',
      },
      action:{
        padding:15,
        borderColor:'red',
        borderWidth:1,
        backgroundColor:'black',
        borderRadius:15
      },
      ActionAddProdcut:{
        padding:15,
        borderColor:'red',
        borderWidth:1,
        backgroundColor:'black',
        borderRadius:15
      },
      actionText:{
        fontSize:25,
        color:'white'
      },
      actionTextdA:{
        fontSize:25,
        color:'white'
      }
})