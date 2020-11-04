/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Location from './Location';
import Swipe from './Swipe';
import axios from 'axios';
import Login from './Login';

const App = () => {
  const [loginComplete, setLoginComplete] = useState(false);
  const [isLocationSet, setIsLocationSet] = useState(false);
  const [currentUser, setCurrentUser] = useState({ _id: 'asdf', username: '', cartList: [] });
  const [foodData, setFoodData] = useState([
    {
      id: 1,
      name: 'Hamburger',
      address: '65449 Viola Keys',
      price: 10.99,
      imageUrl: 'https://ghrsea12-mvp.s3-us-west-2.amazonaws.com/mvpPic/pic6.jpg',
    }
  ]);

  useEffect (() => {
    axios.get('http://localhost:3000/api/foods')
      .then(({ data }) => setFoodData(data))
      .catch((err) => console.log(err));
  }, [])

  return (
    <View style={styles.background}>
      {!loginComplete &&
        <Login
          setLoginComplete={setLoginComplete}
          setCurrentUser={setCurrentUser}
        />}
      {!isLocationSet && loginComplete &&
      <Location setIsLocationSet={setIsLocationSet} />}
      {isLocationSet &&
        <Swipe
          foodData={foodData}
          currentUser={currentUser}
        />}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
