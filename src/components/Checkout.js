import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const Checkout = ({ cart, currentUser, getData }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let t = 0;
    for (let i = 0; i < cart.length; i += 1) {
      let price = cart[i].price * cart[i].quantity;
      t += price;
    }
    setTotal(t);
  }, [])

  const empty = (currentUser, getData) => {
    axios.patch('http://localhost:3000/api/user', {
      params: {
        _id: currentUser._id,
        list: [],
      }
    })
      .then(() => getData(currentUser))
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      {cart.length > 0
        ? (
          <View style={styles.container}>
            <SafeAreaView style={styles.top}>
              <Text style={styles.orderText}>Your Order</Text>
            </SafeAreaView>
            <ScrollView>
              {cart.length > 0 && cart.map((item, i) => (
                <View key={item+i} style={styles.cart}>
                  <Text style={{ paddingHorizontal: 30}}>
                    {item.quantity}
                  </Text>
                  <View style={{flex: 1, justifyContent: 'flex-start', marginLeft: 10}}>
                    <Text>
                      {item.name}
                    </Text>
                  </View>
                  <Text style={{justifyContent: 'flex-end', marginRight: 20}}>
                    {`$${item.price * item.quantity}`}
                  </Text>
                </View>
              ))}
              <View style={{ alignItems: 'flex-start', marginLeft: 10 }}>
                <Button
                  onPress={() => {
                    empty(currentUser, getData)
                  }}
                  title='X Empty order' />
              </View>
              <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
                <View style={styles.bottom}>
                  <Text>Items subtotal: </Text>
                  <Text>{`$${(total).toFixed(2)}`}</Text>
                </View>
                <View style={styles.bottom}>
                  <Text>Delivery fee: </Text>
                  <Text>$2.5</Text>
                </View>
                <View style={styles.bottom}>
                  <Text>Tax: </Text>
                  <Text>{`$${(total * 0.1).toFixed(2)}`}</Text>
                </View>
                <View style={styles.bottom}>
                  <Text>Total: </Text>
                  <Text>{`$${(total + 2.5 + total * 0.1).toFixed(2)}`}</Text>
                </View>
              </View>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => login(username)}
                >
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                    Continue to checkout
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        )
        : (
          <View style={styles.container}>
            <SafeAreaView style={styles.top}>
              <Text style={styles.orderText}>Your Order</Text>
            </SafeAreaView>
            <Text style={{ alignSelf: 'center', padding: 30, fontSize: 20 }}>Your bag is empty</Text>
          </View>
        )
      }
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
    borderBottomColor: 'gray',
  },
  orderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  cart: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginHorizontal: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 40,
    backgroundColor: 'rgb(54, 214, 21)'
  },
})