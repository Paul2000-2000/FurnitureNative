
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, Text, TouchableOpacity, View , Image , ScrollView , TextInput} from 'react-native'

import { useState , useEffect  } from 'react'

import { router } from 'expo-router';

import axios from 'axios';

import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';

import styleGlobal from '../../assets/styles/pageStyle'

export default function AddProductAdmin() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [imageUri, setImageUri] =  useState<string | null>(null);
    const [imageBase64, setImageBase64] = useState<string | null>(null);

    const [errors, setErrors] = useState<{ [key: string]: string }>({});


    useEffect(() => {
      console.log('Updated Image Base64:', imageBase64);
    }, [imageBase64]);


    const pickImage = async () => {
        
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        // Open image picker
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: 'images',
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          base64: true, 
        });
    
        if (!pickerResult.canceled) {
          setImageUri(pickerResult.assets[0].uri);
          setImageBase64(pickerResult.assets[0].base64 ?? null);

          console.log("Image Base64 set : " , imageBase64)
          
        }
      };


      const UploadImageToCloudinary = async () => {

        console.log("Image Base64 in Upload Cloud : " , imageBase64)

        if (!imageBase64) {
          alert('No image selected!');
          return;
        }
      
        const base64Img = `data:image/jpg;base64,${imageBase64}`;

        console.log("Base 64 image : " , base64Img);
      
        try {
          const response = await axios.post('http://192.168.0.102:8080/uploadImageToCloudinary', {
            image: base64Img,
          });

          
          console.log('Uploaded Image URL:', response.data.secure_url);

          if (response.status === 200)
            {
            const imageUrl = response.data.secure_url;
            return imageUrl;
            }


        } catch (err) {
          console.error('Upload failed:', err);
          alert('Upload failed');
        }
      };

      const handleAddProduct = async () =>{

        const imageProduct = await UploadImageToCloudinary();

        console.log('Se vrea adaugare de produs');
        
        const newErrors = {} as { [key: string]: string };

        if (!name.trim()) newErrors.name = "Name is required";
        if (!description.trim()) newErrors.description = "Description is required";
        if (!category.trim()) newErrors.category = "Category is required";
        if (!price.trim()) newErrors.price = "Price is required";
        if (!quantity.trim()) newErrors.quantity = "Quantity is required";
        if (!imageProduct) newErrors.imageProduct = "Image is required";
        

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return; 
        }

        const payload ={
          name,
          description,
          category,
          price,
          quantity,
          imageProduct
      }

      console.log(payload);

      try{

        const response = await axios.post('http://192.168.0.102:8080/add-product', payload);
        if (response.status === 200)
            {
                console.log('product added')
                alert('Product registered successfully');
                router.push('/(admin)/HomeAdmin');
            }

        } catch (error) {
            alert('Something went wrong');
            console.log('Request failed:', error); 
        }


      }

     



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
             {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

            <Text style={styles.inputHeader}>Product Description</Text>
            <TextInput placeholder='Enter product description'
            placeholderTextColor="#888"
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={description}
            onChangeText={(text) => setDescription(text)}
            />
            {errors.description && <Text style={styles.errorText}>{errors.description}</Text>}

            <Text style={styles.inputHeader}>Product Category</Text>
            <RNPickerSelect
              onValueChange={(value) => setCategory(value)}
             items={[
                { label: 'Bed', value: 'bed' },
                { label: 'Chair', value: 'chair' },
                { label: 'Lamp', value: 'lamp' },
                { label: 'Table', value: 'table' },

                    ]}
                />
            {errors.category && <Text style={styles.errorText}>{errors.category}</Text>}

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
            {errors.price && <Text style={styles.errorText}>{errors.price}</Text>}


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
            {errors.quantity && <Text style={styles.errorText}>{errors.quantity}</Text>}

            <TouchableOpacity  onPress={pickImage} style={styles.action}>
                <Text style={styles.actionText}> Pick an image!</Text>
            </TouchableOpacity>

            {errors.imageProduct && <Text style={styles.errorText}>{errors.imageProduct}</Text>}

            {imageUri && (
                <Image source={{ uri: imageUri }} style={styles.image} />
            )}


            <TouchableOpacity style={styles.ActionAddProdcut} onPress={() => handleAddProduct()}>
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
      },

      errorText: {
        color: 'red',
        fontSize: 14,
        marginLeft: 10,
      },
})