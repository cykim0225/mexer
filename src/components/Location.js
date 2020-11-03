import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Location = ({ setIsLocationSet }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.input}>Enter a location</Text>
      <View style={styles.searchSection}>
        <Icon name="location-pin" size={40} color="black" />
        <TextInput
          style={styles.inputbox}
          onSubmitEditing={() => setIsLocationSet(true)}
        />
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: 'black',
    color: 'rgb(176, 176, 176)',
    fontWeight: 'bold',
    fontSize: 30,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
    marginRight: 30,
  },
  inputbox: {
    flex: 0.8,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    height: 50,
    borderColor: 'gray',
    backgroundColor: 'rgb(210, 210, 210)',
    borderWidth: 3,
    borderRadius: 10,
  },
});
