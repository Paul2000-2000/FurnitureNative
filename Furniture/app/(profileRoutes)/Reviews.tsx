

import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { router } from 'expo-router'

import ReviewItem from '.././components/ReviewItem'

import { Feather, SimpleLineIcons } from '@expo/vector-icons'
import stylePages from '../../assets/styles/pageStyle'
import styleHeader from '../../assets/styles/headerStyle'


export default function Reviews() {

    const navigateProfile = () =>{
        router.push('/(navigationDownBar)/Profile')
    }


  return (
    <SafeAreaProvider style={stylePages.containerGlobal}>
        <ScrollView contentContainerStyle={stylePages.scrollContainer30Ga20}>
                <View style={styleHeader.upDivJf}>
                    <TouchableOpacity onPress={() => navigateProfile()}>
                        <SimpleLineIcons name="arrow-left" size={20} />
                    </TouchableOpacity>
                    <Text style={styleHeader.upDivText}>My reviews</Text>
                    <TouchableOpacity>
                        <Feather name='search' size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.reviewList}>
                     <ReviewItem/>
                     <ReviewItem/>
                     <ReviewItem/>
                     <ReviewItem/>
                     <ReviewItem/>
                     <ReviewItem/>
                     <ReviewItem/>
                </View>
        </ScrollView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  
   
      reviewList:{
        flexDirection:'column',
        gap:30
      },
     
})