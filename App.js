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

const App = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.FirstCon}>
          <Image
            source={Images.primary} // place all images in single file and call it
            style={styles.logo}
          />
          <Text style={styles.Txt1}>{Strings.welcome}</Text> 
        </View>
        <View style={styles.Second}>
          <View style={styles.Inner}>
            <TextInput
              placeholder={Strings.email}
              placeholderTextColor="black"
              style={styles.TextInp}
            />
          </View>
          <Password  />
        </View>
        <View style={styles.Third}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>{Strings.forgotPassword}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonContainer}>
          <LoginButton title={Strings.logIn} />

          <LoginButton
            title={Strings.loginOtp}
            til={{color: 'black'}}
            Col={{
              backgroundColor: 'white',
              borderWidth: 0.3,
              borderColor: 'black',
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
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  FirstCon: {
    width: wp(70),
    height: hp(36),
    marginTop: hp(-3),
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
    color: '#3FCC97',
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
    backgroundColor: 'whitesmoke',
    borderWidth: wp(0.1),
    borderRadius: 9,
    borderColor: 'grey',
    paddingHorizontal: wp(2),
  },
  outer: {
    width: wp(90),
    height: hp(7),
    backgroundColor: 'whitesmoke',
    borderWidth: wp(0.1),
    borderRadius: 9,
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TextInp: {
    width: '90%',
    color: 'black',
  },
  hideIcon: {
    marginRight: wp(5),
  },
  Third: {
    backgroundColor: 'white',
    marginLeft: wp(50),
    width: wp(44),
    height: hp(3),
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: hp(2.7),
    color: 'black',
    fontWeight: '500',
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
  },
  ButtonContainer: {
    width: wp(90),
    height: hp(22),
  },
  loginButton: {
    width: wp(90),
    height: hp(8),
    backgroundColor: 'green',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: wp(5),
    fontWeight: '700',
    letterSpacing: 2,
    color: 'white',
  },
  loginWithOtpButton: {
    width: wp(90),
    height: hp(8),
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginWithOtpButtonText: {
    fontSize: wp(5),
    fontWeight: '700',
    letterSpacing: 2,
    color: 'black',
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
    color: 'grey',
    marginBottom: hp(3),
  },
  signUpText: {
    fontSize: wp(5.5),
    fontWeight: '700',
    color: 'black',
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
    marginLeft: wp(1),
    marginBottom: hp(3.4),
  },
});
