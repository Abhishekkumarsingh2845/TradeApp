import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const App = () => {
  const phoneInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  return (
    <View style={styles.container}>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="US"
        layout="first"
        onChangeText={(text) => {
          setPhoneNumber(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedPhoneNumber(text);
        }}
        withDarkTheme
        withShadow
        autoFocus
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default App;
