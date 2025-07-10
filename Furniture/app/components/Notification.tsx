
import React from 'react'

import { StyleSheet, Text, View, Image } from 'react-native'

export default function Notification() {
  return (
    <View style={styles.Notification}>
      <Image
        source={require('./../../assets/images/lamp/LampItem.png')}
        style={styles.Image}
      />
      <View style={styles.TextContainer}>
        <Text style={styles.NotificationOrder}>
          Your order #123456789 has been confirmed
        </Text>
        <Text style={styles.NotificationMessage}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pretium et in arcu adipiscing nec. Turpis pretium et in arcu adipiscing nec.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Notification: {
    shadowColor: '#8A959E',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.2,
    shadowRadius: 30,
    elevation: 10,
    backgroundColor: '#F8F8FF',
    height: 185,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    gap:10
  },
  Image: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
    
  },
  TextContainer: {
    flex: 1,           // allows text to use remaining width
    flexShrink: 1,     // allows wrapping if needed
  },
  NotificationOrder: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  NotificationMessage: {
    color: 'grey',
    fontSize: 14,
    flexWrap: 'wrap',
  },
})
