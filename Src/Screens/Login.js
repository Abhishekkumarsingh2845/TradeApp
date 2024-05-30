import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {hp, wp} from '../Utlis/Responsive';

import Strings from '../Constants/Strings';
import Images from '../Constants/Images';
import Colours from '../Constants/Colors';
import Input from '../Components/Input';
import PrimaryButton from '../Components/PrimaryButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colours.white} />
      <KeyboardAwareScrollView>
        <View style={styles.logoContainer}>
          <Image source={Images.primary} style={styles.logoImage} />
          <Text style={styles.logoText}>{Strings.welcome}</Text>
        </View>

        <Input placeholder={Strings.email} />

        <Input placeholder={Strings.password} isPassword={true} />

        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>
              {Strings.forgotPassword}
            </Text>
          </TouchableOpacity>
        </View>

        <PrimaryButton title={Strings.logIn} />

        <PrimaryButton
          title={Strings.loginOtp}
          textStyle={{color: Colours.black}}
          btnStyle={{
            backgroundColor: Colours.white,
            borderWidth: 0.3,
            borderColor: Colours.black,
          }}
        />

        <View style={styles.SignUpContainer}>
          <TouchableOpacity>
            <Text style={styles.newUserText}>{Strings.newUser}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signUpText}>{Strings.signUpNow}</Text>
          </TouchableOpacity>
        </View>
       
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: hp(2),
    paddingHorizontal: hp(2),
    flex: 1,
    backgroundColor: Colours.backgroundColour,
  },
  logoContainer: {
    width: wp(75),
    height: hp(28),
    marginTop: hp(3),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',

    //  backgroundColor:'yellow',
  },
  logoImage: {
    // width: wp(35),
    height: hp(17),
    resizeMode: 'contain',
    // backgroundColor:'blue',
  },
  logoText: {
    fontSize: hp(3),
    color: Colours.title,
    fontWeight: '900',
    marginTop: hp(-0.5),
  },

  forgotPasswordContainer: {
    marginTop: hp(2.5),
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    fontSize: hp(2.3),
    color: Colours.black,
    fontWeight: '700',
    textDecorationLine: 'underline',
    textDecorationColor: Colours.black,
    textAlign: 'right',
  },
  ButtonContainer: {
    marginTop: hp(2.5),
  },

  SignUpContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp(2),
  },
  newUserText: {
    fontSize: hp(2.5),
    fontWeight: '700',
    color: Colours.grey,
  },
  signUpText: {
    fontSize: hp(2.5),
    fontWeight: '600',
    color: Colours.black,
    textDecorationLine: 'underline',
    textDecorationColor: Colours.black,
    marginHorizontal: 5,
  },
});
