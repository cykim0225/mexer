import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const Login = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const login = (username) => {
  axios.post('http://localhost:3000/api/user', {
    'username': username,
    'cartList': []
  })
}

  return (
    <View style={styles.container}>
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 35, fontWeight: 'bold' }}>
          MEXER
        </Text>
      </View>
      <View style={{ flex: 7, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 }}>
          <Icon name="person" size={35} color="rgb(176, 176, 176)" style={{ marginLeft: 70 }}/>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={styles.loginSection}>
          <TextInput
            style={styles.inputbox}
            placeholder='Username'
            placeholderTextColor='black'
            value={username}
            autoCapitalize='none'
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.inputbox}
            placeholder='Password'
            placeholderTextColor='black'
            value={password}
            autoCapitalize='none'
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => login(username)}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginText: {
    color: 'rgb(176, 176, 176)',
    fontWeight: 'bold',
    fontSize: 30,
  },
  loginSection: {
    alignItems: 'center',
    marginBottom: 350,
  },
  inputbox: {
    width: '70%',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    height: 50,
    borderColor: 'gray',
    backgroundColor: 'rgb(210, 210, 210)',
    color: 'black',
    fontSize: 20,
    borderWidth: 3,
    paddingLeft: 10,
    marginBottom: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: 40,
    backgroundColor: 'rgb(54, 214, 21)'
  }
});
