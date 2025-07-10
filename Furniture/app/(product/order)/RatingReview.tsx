
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StyleSheet, Text, View , TouchableOpacity , Image , ScrollView} from 'react-native'

import { router } from 'expo-router'

import RatingReviewItem from '../.././components/RatingReviewItem'

import { Feather , SimpleLineIcons } from '@expo/vector-icons'
import stylePages from '../../../assets/styles/pageStyle'
import styleHeader from '../../../assets/styles/headerStyle'
import stylesButton from '../../../assets/styles/buttonStyle'


export default function RatingReview() {

    const navigateProduct = () =>{
        router.push('/(product/order)/Product')
    }


  return (
    <SafeAreaProvider style={stylePages.containerGlobal}>
         <ScrollView contentContainerStyle={[stylePages.scrollContainer30, styles.Pad]}>
                <View style={styleHeader.upDivGa}>
                    <TouchableOpacity onPress={() => navigateProduct()}>
                         <SimpleLineIcons name="arrow-left" size={20} />
                     </TouchableOpacity>
                    <Text style={styleHeader.upDivText}>Rating & Review</Text>
                 </View>
                 <View style={styles.ReviewItem}>
                        <Image source={require('../../../assets/images/lamp/LampItem.png')} style={styles.FavoritesImage}/>
                        <View style={styles.FavoritesInfo}>
                                     <Text style={styles.ReviewItemName}>
                                            Minimal Stands
                                     </Text>
                                     <View style={styles.starNumber}>
                                        <Feather name='star' size={20}/>
                                        <Text style={styles.reviewNumber}>
                                            4.5
                                        </Text>
                                     </View>
                                     <Text style={styles.totalReviews}>
                                            50 reviwes
                                     </Text>
                       
                        </View>
                  </View>
                  <View style={styles.Items}>
                            <RatingReviewItem/>
                            <RatingReviewItem/>
                            <RatingReviewItem/>
                            <RatingReviewItem/>
                            <RatingReviewItem/>
                            <RatingReviewItem/>
                  </View>
          </ScrollView>
          <TouchableOpacity style={[stylesButton.ActionButton, styles.Pos]}>
                <Text style={stylesButton.ActionButtonText}>Write a review</Text>
           </TouchableOpacity>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
    Pad:{
      paddingBottom:150
    },
   
   

     ReviewItem:{
        display:'flex',
        flexDirection:'row',
        gap:15,
        alignItems:'center',
        paddingVertical:20,
        borderBottomWidth:1,
        borderBottomColor:'grey'
    },
    FavoritesImage:{
        width:100,
        height:100,
        resizeMode:'cover',
    },
    FavoritesInfo:{
        display:'flex',
        flexDirection:'column',
        gap:15,
    },
    ReviewItemName:{
        fontSize:14,
        color:'grey'
    },
    starNumber:{
        flexDirection:"row",
        gap:10 , 
        alignItems:'center',
        paddingLeft:10
    },
    reviewNumber:{
        fontSize:24,
        fontWeight:'bold'
    },
    totalReviews:{
        color:'black',
        fontWeight:'semibold',
        fontSize:16
    },

    
    Items:{
        marginTop:35,
        flexDirection:'column',
        gap:40
    },



   Pos:{
    position:'absolute',
    bottom:25
   }
      
})