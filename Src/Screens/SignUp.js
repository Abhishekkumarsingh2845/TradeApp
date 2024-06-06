import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import Input from '../Components/Input';
import Strings from '../Constants/Strings';
import Colours from '../Constants/Colors';
import Colors from '../Constants/Colors';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneInput from '../Components/PhoneInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {hp, wp} from '../Utlis/Responsive';

const tickImage = require('./../Assets/Img/check.png');

const SignUp = ({navigation}) => {
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);

  const handleCheckboxToggle = () => {
    setIsCheckboxSelected(!isCheckboxSelected);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
<KeyboardAwareScrollView>
        <View style={styles.inputContainer}>
          <Input placeholder={Strings.name} placeholderColour={Colours.black} />
          <Input
            placeholder={Strings.email}
            placeholderColour={Colours.black}
          />

          <View style={styles.phoneInputContainer}>
            <PhoneInput />
          </View>

          <Input
            placeholder={Strings.password}
            isPassword={true}
            placeholderColour={Colours.black}
          />
          <Input
            placeholder={Strings.confirmpassword}
            isPassword={true}
            placeholderColour={Colours.black}
          />
        </View>
        <View style={styles.disclaimerContainer}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={handleCheckboxToggle}>
            <View style={styles.checkbox}>
              {isCheckboxSelected && (
                <Image source={tickImage} style={styles.tickImage} />
              )}
            </View>
          </TouchableOpacity>
          <Text style={styles.disclaimerText}>
            I have by accept all{' '}
            <Text style={styles.linkText}>term & conditions</Text>
            <Text> &</Text>
            <Text style={styles.linkText}>{'\n'}Privacy Policy.</Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="SIGN UP NOW"
            btnStyle={{
              marginTop: hp(-8),
              width: '100%',
              alignSelf: 'center',
            }}
            onPress={() => navigation.navigate('FormPoint')}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp(3.5),
  },
  inputContainer: {
    marginTop: hp(13),
  },
  phoneInputContainer: {
    marginVertical: 8,
  },
  disclaimerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2.5),
  },
  checkboxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(4),
    marginBottom: wp(3.5),
  },
  checkbox: {
    width: wp(5.9),
    height: hp(3),
    borderRadius: 4,
    borderColor: Colors.black,
    borderWidth: wp(0.5),
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickImage: {
    width: wp(5),
    height: hp(5),
    resizeMode: 'contain',
  },
  disclaimerText: {
    fontFamily: 'Poppins',
    fontSize: hp(2.5),
    color: Colors.grey,
  },
  linkText: {
    fontFamily: 'Poppins',
    fontSize: hp(2.4),
    color: Colors.black,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    marginVertical: hp(15),
  },
});
