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

const App = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.FirstCon}>
          <Image
            source={require('./Src/Assets/Img/MainLogo.png')}
            style={styles.logo}
          />
          <Text style={styles.Txt1}>welcome back</Text>
        </View>
        <View style={styles.Second}>
          <View style={styles.Inner}>
            <TextInput
              placeholder="   Email"
              placeholderTextColor="black"
              style={styles.TextInp}
            />
          </View>
          <View style={styles.outer}>
            <TextInput
              placeholder="   Password"
              placeholderTextColor="black"
              secureTextEntry={!passwordVisible}
              style={styles.TextInp}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}>
              <Image
                source={require('./Src/Assets/Img/Hide.png')}
                style={styles.hideIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Third}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>LOG IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginWithOtpButton}>
            <Text style={styles.loginWithOtpButtonText}>LOG IN WITH OTP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SignUpContainer}>
          <TouchableOpacity>
            <Text style={styles.newUserText}>New User?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signUpText}>Sign Up Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FCFCFC',
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
    marginLeft: wp(53),
    width: wp(44),
    height: hp(3),
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: hp(2.4),
    color: 'black',
    fontWeight: '500',
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
  },
  ButtonContainer: {
    width: wp(90),
    height: hp(22),
    justifyContent: 'space-evenly',
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
