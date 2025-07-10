
import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { router } from 'expo-router';

import { AntDesign, Feather, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import styleGlobal from '../../../assets/styles/pageStyle';

export default function Product() {

    const navigateCategoryProducts = () =>{
        router.push('/(navigationDownBar)/Home');
    }

    
    const addProductToFavorites = () => {
        router.push('/(navigationDownBar)/Favorites');
    }

    const navigateReviewRating = () =>{
        router.push('/(product/order)/RatingReview')
    }



  return (
    <SafeAreaProvider style={styleGlobal.containerGlobal}>
       <View style={styles.content}>
        <View style={styles.up}>
            <TouchableOpacity style={styles.back} onPress={() => navigateCategoryProducts()}>
                <SimpleLineIcons name='arrow-left' size={20}/>
            </TouchableOpacity>
            <View style={styles.colors}>
                <View style={styles.colorOne}></View>
                <View style={styles.colorTwo}></View>
                <View style={styles.colorThree}></View>
            </View>
            <Image source={require('../../../assets/images/lamp/LampItem.png')} style={styles.imageUp}/>
        </View>
        <View style={styles.down}>
            <Text style={styles.productName}>
                Minimal Lamp
            </Text>
            <View style={styles.productQandP}>
                <Text style={styles.productPrice}>
                    $ 50
                </Text>
                <View style={styles.productQuantity}>
                    <View style={styles.productQunatityAct}>
                        <AntDesign name='plus' size={15}/>
                    </View>
                    <Text style={styles.productQuantityNmb}>
                        01
                    </Text>
                    <View style={styles.productQunatityAct}>
                        <AntDesign name='minus' size={15}/>
                    </View>
                </View>
            </View>
            <View style={styles.peopleReview}>
                <View style={styles.starNumber}>
                    <Feather name='star' size={20}/>
                    <Text style={styles.reviewNumber}>
                        4.5
                    </Text>
                </View>
                <TouchableOpacity onPress={ () => navigateReviewRating() }>
                    <Text style={styles.peopleNumberReview}>
                        (50 reviews)
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.productDescription}>
            Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. 
            </Text>
            <View style={styles.actionDiv}>
                <TouchableOpacity style={styles.Save} onPress={() => addProductToFavorites()}>
                    <FontAwesome name='save' size={25} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionAdd}>
                    <Text style={styles.actionAddText}>
                        Add to cart
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
        
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        gap:25
    },
   
    up:{
        height:400,
        
    },
    imageUp:{
        height:400,
        width:300,
        alignSelf:'flex-end',
        resizeMode:'cover',
        borderBottomLeftRadius:15
    },
    back:{
        width:40,
        height:40,
        position:'absolute',
        left:130,
        top:50,
        backgroundColor:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        zIndex:2
    },
    colors:{
        position:'absolute',
        left:115,
        top:125,
        width:60,
        height:180,
        borderRadius:25,
        backgroundColor:'#F8F8FF',
        display:'flex',
        flexDirection:"column",
        alignItems:'center',
        justifyContent:'space-between',
        padding:20,
        zIndex:2,
    },
    colorOne:{
        borderColor:'grey',
        borderWidth:1,
        backgroundColor:'white',
        width:25,
        height:25,
        borderRadius:50,
    },
    colorTwo:{
       
        backgroundColor:'#B4916C',
        width:25,
        height:25,
        borderRadius:50,
    },
    colorThree:{
        backgroundColor:'#E4CBAD',
        width:25,
        height:25,
        borderRadius:50,
    },
    down:{
        
        flexDirection:'column',
        gap:15,
        padding:25,
        justifyContent:'center'
    },
    productName:{
        paddingLeft:10,
        fontSize:24,
        fontWeight:'bold',
        color:'black'
    },
    productQandP:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10
    },
    productPrice:{
        fontSize:30,
        fontWeight:'bold',
        fontFamily:'Nunuito-Sans'
    },
    productQuantity:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:15
    },
    productQunatityAct:{
        backgroundColor:'#bec4cf',
        padding:10
    },
    productQuantityNmb:{
        fontSize:18,
        fontWeight:'semibold',
        color:'black'
    },
    peopleReview:{
        display:'flex',
        flexDirection:'row',
        gap:45,
        alignItems:'center'
    },
    starNumber:{
        flexDirection:"row",
        gap:10 , 
        alignItems:'center',
        paddingLeft:10
    },
    reviewNumber:{
        fontSize:18,
        fontWeight:'bold'
    },
    peopleNumberReview:{
        fontSize:14,
        color:'grey'
    },
    productDescription:{
        color:'grey',
        fontSize:14,
        fontFamily:'Nunito-sans',
        paddingHorizontal:25,
        lineHeight:22

    },
    actionDiv:{
        display:"flex",
        flexDirection:'row',
        justifyContent:'space-around',
        gap:25,

    },
    Save:{
        width:60,
        height:60,
        backgroundColor:'#bec4cf',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    actionAdd:{
        height:60,
        width:240,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
        borderRadius:15
    },
    actionAddText:{
        color:'white',
        fontSize:20
    }


})