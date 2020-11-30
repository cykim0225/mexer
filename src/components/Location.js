import React, { useState } from 'react';
import { View, SafeAreaView, TextInput, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Location = () => {
  const [zipCode, setZipCode] = useState('');
  const [isLocationSet, setIsLocationSet] = useState(false);
  const [isValidZipcode, setIsValidZipcode] = useState(true);

  const handleZipCodeSubmit = (zipcode) => {
    if (zipcode.length !== 5) {
      setIsValidZipcode(false);
      setZipCode('');
      return;
    }
    for (let i = 0; i < zipcode.length; i++) {
      if (zipcode.charCodeAt(i) >= 48 && zipcode.charCodeAt(i) <= 57) {
        continue;
      } else {
        setIsValidZipcode(false);
        return;
      }
    }

    setIsValidZipcode(true);
    setIsLocationSet(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      {console.log(isValidZipcode)}
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Enter a zip code</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.searchSection}>
          <Icon name="location-pin" size={40} color="black" />
          <TextInput
            style={styles.inputbox}
            onChangeText={text => setZipCode(text)}
            defaultValue={zipCode}
            onSubmitEditing={() => handleZipCodeSubmit(zipCode)}
          />
        </View>
        <View style={styles.errorMessageContainer}>
          {!isValidZipcode &&
            <Text style={styles.errorMessage}>
              Invalid zip code entered.
              {"\n"}Please enter a 5 digit US zip code.
            </Text>
          }
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  info: {
    color: 'rgb(176, 176, 176)',
    fontWeight: 'bold',
    fontSize: 30,
  },
  searchSection: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  inputbox: {
    flex: 0.8,
    height: 50,
    borderColor: 'gray',
    backgroundColor: 'rgb(210, 210, 210)',
    borderWidth: 3,
    borderRadius: 10,
    color: 'black',
    fontSize: 20,
    marginRight: 25,
    paddingLeft: 10,
  },
  errorMessageContainer: {
    paddingHorizontal: 20,
  },
  errorMessage: {
    textAlign: 'center',
    color: 'red',
    fontSize: 15,
  }
});
