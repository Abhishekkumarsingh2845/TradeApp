import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {hp, wp} from './Src/Utlis/Responsive';
import LoginButton from './Src/Components/LoginButton';
import Password from './Src/Components/Password';
import Strings from './Src/Constants/Strings';
import Images from './Src/Constants/Images';
import Colours from './Src/Constants/Colors';
import Email from './Src/Components/Input';

const App = () => {
  return (
    <ScrollView style={styles.Scroll}>
      <View style={styles.Container}>
        <View style={styles.FirstCon}>
          <Image
            source={Images.primary} // place all images in single file and call it
            style={styles.logo}
          />
          <Text style={styles.Txt1}>{Strings.welcome}</Text>
        </View>
        <View style={styles.Second}>
          <Email  placeholder={Strings.email}/>
          <Email  placeholder={Strings.password} />
        </View>
        <View style={styles.Third}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>
              {Strings.forgotPassword}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonContainer}>
          <LoginButton title={Strings.logIn} />

          <LoginButton
            title={Strings.loginOtp}
            til={{color: Colours.black}}
            Col={{
              backgroundColor: Colours.white,
              borderWidth: 0.3,
              borderColor: Colours.black,
            }}
          />
        </View>
        <View style={styles.SignUpContainer}>
          <TouchableOpacity>
            <Text style={styles.newUserText}>{Strings.newUser}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signUpText}>{Strings.signUpNow}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colours.backgroundColour,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Scroll: {
    flex: 1,
    backgroundColor: 'white',
  },
  FirstCon: {
    width: wp(70),
    height: hp(36),
    marginTop: hp(-1),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: wp(50),
    height: hp(20),
    resizeMode: 'contain',
  },
  Txt1: {
    fontSize: hp(3.5),
    color: Colours.title,
    fontWeight: '900',
  },
  Second: {
    width: wp(90),
    height: hp(24),
    justifyContent: 'space-evenly',
    marginTop: hp(3),
  },
  Inner: {
    width: wp(90),
    height: hp(7),
    backgroundColor: Colours.whitesmoke,
    borderWidth: wp(0.1),
    borderRadius: 9,
    borderColor: Colours.grey,
    paddingHorizontal: wp(2),
  },

  hideIcon: {
    marginRight: wp(5),
  },
  Third: {
    backgroundColor: Colours.white,
    marginLeft: wp(50),
    width: wp(44),
    height: hp(3),
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: hp(2.7),
    color: Colours.black,
    fontWeight: '500',
    textDecorationLine: 'underline',
    textDecorationColor: Colours.black,
  },
  ButtonContainer: {
    width: wp(90),
    height: hp(22),
  },
  loginButton: {
    width: wp(90),
    height: hp(8),
    backgroundColor: Colours.secondary,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: wp(5),
    fontWeight: '700',
    letterSpacing: 2,
    color: Colours.white,
  },
  loginWithOtpButton: {
    width: wp(90),
    height: hp(8),
    backgroundColor: Colours.white,
    borderRadius: 15,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginWithOtpButtonText: {
    fontSize: wp(5),
    fontWeight: '700',
    letterSpacing: 2,
    color: Colours.white,
  },
  SignUpContainer: {
    width: wp(72),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: hp(2),
  },
  newUserText: {
    fontSize: wp(5),
    fontWeight: '700',
    color: Colours.grey,
    marginBottom: hp(3),
  },
  signUpText: {
    fontSize: wp(5.5),
    fontWeight: '700',
    color: Colours.black,
    textDecorationLine: 'underline',
    textDecorationColor: Colours.black,
    marginLeft: wp(1),
    marginBottom: hp(3.4),
  },
});