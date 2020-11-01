import React, {useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

const Location = () => {
  const [location, setLocation] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.input}>Enter a location</Text>
      <TextInput
        style={styles.inputbox}
        onSubmitEditing={() => setLocation(true)}
      />
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
    color: 'rgb(176, 176, 176)',
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputbox: {
    width: '70%',
    height: 50,
    borderColor: 'gray',
    backgroundColor: 'rgb(210, 210, 210)',
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 200,
  },
});
