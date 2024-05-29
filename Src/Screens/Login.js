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

const Login = () => {
  return (
    <ScrollView style={styles.Scroll}>
      <View style={styles.container}>
        <StatusBar  barStyle="dark-content" backgroundColor={Colours.white}/>
        <View style={styles.logoContainer}>
          <Image
            source={Images.primary} // place all images in single file and call it
            style={styles.logoImage}
          />
          <Text style={styles.logoText}>{Strings.welcome}</Text>
        </View>
        <View style={styles.placeholderContainer}>
          <Input placeholder={Strings.email} />

          <Input placeholder={Strings.password} isPassword={true} />
        </View>
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>
              {Strings.forgotPassword}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonContainer}>
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

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.backgroundColour,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Scroll: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoContainer: {
    width: wp(75),
    height: hp(28),
    marginTop:hp(3),
    justifyContent: 'flex-end',
    alignItems: 'center',
    //  backgroundColor:'yellow',
    

  },
  logoImage: {
    width: wp(35),
    height: hp(17),
    resizeMode: 'contain',
    // backgroundColor:'blue',
 
  },
  logoText: {
    fontSize: hp(3),
    color: Colours.title,
    fontWeight: '900',
    marginTop:hp(-0.5)
  },
  placeholderContainer: {
    width: wp(80),
    height: hp(15),
    justifyContent: 'space-between',
    marginTop: hp(5),
    // backgroundColor:'red',
    
  },

  forgotPasswordContainer: {
    backgroundColor: Colours.white,
    marginLeft: wp(50),
    width: wp(44),
    height: hp(3),
    alignItems: 'flex-start',
    //  backgroundColor:'blue',
     marginLeft:wp(54),
    marginTop:hp(2.5),
  },
  forgotPasswordText: {
    fontSize: hp(2.3),
    color: Colours.black,
    fontWeight: '700',
    textDecorationLine: 'underline',
    textDecorationColor: Colours.black,
  },
  ButtonContainer: {
    width: wp(80),
    height: hp(18),
    // backgroundColor:'black',
    marginTop:hp(2.5),
   
    
  },
  
  
  SignUpContainer: {
    width: wp(49),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: hp(0.1),
     
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
    
  },
});
