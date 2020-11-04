import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Checkout = ({ cart }) => {

const quantityHandler = (action, idx) => {
  console.log(action)
}

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.top}>
        <Text style={styles.orderText}>Your Order</Text>
      </SafeAreaView>
      <ScrollView>
        {cart.length > 0 && cart.map((item, i) => (
          <View style={styles.cart}>
            <Text style={{marginLeft: 20}}>
              {item.name}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.addRemoveIcon}>
                <Icon
                  onPress={() => quantityHandler('remove', i)}
                  name="remove"
                  size={22}
                  color='#bbbbbb'
                />
              </View>
              <View style={{ alignItems: 'center', borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#bbbbbb', paddingHorizontal: 8, paddingVertical: 3, color: '#bbbbbb' }}>
                <Text style={{ fontSize: 15, color: '#bbbbbb' }}>1</Text>
              </View>
              <View style={styles.addRemoveIcon}>
                <Icon
                  onPress={() => quantityHandler('add', i)}
                  name="add"
                  size={22}
                  color='#bbbbbb'
                />
              </View>
            </View>
            <Text style={{justifyContent: 'flex-end', marginRight: 20}}>
              {item.price}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  orderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cart: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  addRemoveIcon: {
    borderWidth: 1,
    borderColor: '#cccccc',
  }
})