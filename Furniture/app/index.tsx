import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, View , StyleSheet ,  ImageBackground , TouchableOpacity} from "react-native";

import { router } from "expo-router";

import styleGlobal from "../assets/styles/pageStyle"



export default function Index() {

    const navigateSignUp = () =>{
      router.push('/(auth)/SignUp');
    }


  return (
     
   <SafeAreaProvider style={styleGlobal.containerGlobal}>
      <ImageBackground source={require('../assets/images/boardingImage.png')} style={styles.image}> 
          <View >
          <Text style={ styles.textOne}>
              MAKE YOUR 
          </Text>
          <Text style={styles.textTwo}>
              HOME BEAUTIFULL
          </Text>
          <Text style={styles.description}>
              The best simple place where you discover most wonderfull furnitures and make your home beautifull
          </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={ () => navigateSignUp()}>
            <Text style={styles.buttonText}>
              Get Started
            </Text>
          </TouchableOpacity>
      </ImageBackground>
   </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({

   image:{
      flex:1,
      resizeMode:'cover',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-evenly',
      alignItems:'flex-start',
      padding:25
   },
   textOne:{
    marginBottom:10,
    fontSize:24,
    color:'white'
   },
   textTwo:{
    fontSize:30,
    color:'#808080',
    fontWeight:500
   },
   description:{
    color:'grey',
    fontSize:18,
    textAlign:'center',
    marginTop:45,
    lineHeight: 32, 

   },
   button:{
    paddingVertical:15,
    paddingHorizontal:25,
    borderRadius:10,
    backgroundColor:'#242424',
    alignSelf:'center'
   },
   buttonText:{
    fontSize:18,
    color:'white'
   }

})