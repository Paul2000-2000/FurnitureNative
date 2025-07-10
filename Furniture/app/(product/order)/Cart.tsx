
import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

import { router } from 'expo-router';
import CartItem from '../../components/CartItem';

import { SimpleLineIcons } from '@expo/vector-icons';
import stylePages from '../../../assets/styles/pageStyle';
import styleHeader from '../../../assets/styles/headerStyle'
import stylesButton from '../../../assets/styles/buttonStyle';

export default function Cart() {
  const navigateHome = () => {
    router.push('/(navigationDownBar)/Home');
  };

  const navigateCheckout = () =>{
    router.push('/(product/order)/Checkout');
  }

  return (
    <SafeAreaProvider style={stylePages.containerGlobal}>
      <ScrollView contentContainerStyle={stylePages.scrollContainer30}>
        <View style={styles.content}>
          <View style={styleHeader.upDivGa}>
            <TouchableOpacity onPress={navigateHome}>
              <SimpleLineIcons name="arrow-left" size={20} />
            </TouchableOpacity>
            <Text style={styleHeader.upDivText}>My Cart</Text>
          </View>
          <View style={styles.CartItems}>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </View>
        </View>
      </ScrollView>

      {/* Fixed bottom container */}
      <View style={styles.bottomBar}>
        <View style={styles.promoSection}>
          <TextInput
            style={styles.promoInput}
            placeholder="Enter your promo code"
            placeholderTextColor="#888"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity style={styles.promoAction}>
            <SimpleLineIcons name="arrow-right" size={15} style={{ color: 'white' }} />
          </TouchableOpacity>
        </View>

        <View style={styles.PriceSection}>
          <Text style={styles.PriceLabel}>Total:</Text>
          <Text style={styles.PriceData}>$ 95.00</Text>
        </View>

        <TouchableOpacity style={stylesButton.ActionButton} onPress={() => navigateCheckout()}>
          <Text style={stylesButton.ActionButtonText}>Check out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
 
  content: {
    flex: 1,
    gap: 15,
    paddingBottom:175
  },
  
  CartItems: {
    flexDirection: 'column',
    gap: 10,
  },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },

  promoSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  promoInput: {
    flex: 1,
    padding: 8,
    borderColor: '#eddedd',
    borderWidth: 1,
    backgroundColor: '#F8F8FF',
    marginRight: 8,
  },
  promoAction: {
    paddingHorizontal: 16,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },

  PriceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  PriceLabel: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
  },
  PriceData: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  
});
