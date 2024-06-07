import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {hp, wp} from '../Utlis/Responsive';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Colours from '../Constants/Colors';

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
        codeTextStyle={styles.countryCode}
        defaultCode="IN"
        layout="first"
        onChangeText={text => {
          setPhoneNumber(text);
        }}
        onChangeFormattedText={text => {
          setFormattedPhoneNumber(text);
        }}
        withDarkTheme
        withShadow
        containerStyle={styles.phoneInputContainer}
        textContainerStyle={styles.textContainer}
        textInputStyle={styles.textInput}
        flagButtonStyle={styles.flagButton}
        placeholder="    "
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    borderRadius: 9,
  },
  phoneInputContainer: {
    borderRadius: 9,

    width: wp(93),
    height: hp(6.1),
    backgroundColor: Colours.whitesmoke,
    borderColor: Colors.black,
    borderWidth: wp(0.1),
  },
  textContainer: {
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    backgroundColor: Colours.whitesmoke,

    height: hp(5.7),
  },
  textInput: {
    fontSize: hp(3),
    color: 'black',

    height: hp(5),
    marginTop: 4,
    padding: 2,
  },
  flagButton: {
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    backgroundColor: Colours.whitesmoke,
    justifyContent: 'center',
    borderEndEndRadius: 9,
    alignSelf: 'center',
    width: 50,
    height: hp(5.7),
  },
  countryCode: {
    marginTop: 11,
    fontSize: hp(3),
    fontWeight: '400',
    height: hp(5),
  },
});

export default App;
