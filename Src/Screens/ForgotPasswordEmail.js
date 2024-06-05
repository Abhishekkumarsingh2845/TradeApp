import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Colours from '../Constants/Colors';
import Input from '../Components/Input';
import {hp, wp} from '../Utlis/Responsive';
import PrimaryButton from '../Components/PrimaryButton';

const ForgotPasswordEmail = () => {
  return (
    <View
      syle={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
      }}>
      <View style={{alignItems: 'center', width: '100%', height: hp(60)}}>
        <Image
          source={require('./../Assets/Img/forgotpassword.png')}
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        />
      </View>
      <View style={{paddingHorizontal: wp(3)}}>
        <Text
          style={{fontSize:hp(3), color: Colours.black, fontWeight: 'bold'}}>
          Forgot Password
        </Text>
        <Input
          placeholder={'Enter the Email Address or Phone Number '}
          placeholderColour="grey"
          containerStyle={{marginVertical: 17}}
        />
        <Text style={{fontWeight:'bold',color: Colours.black, textDecorationLine: 'underline',fontSize:hp(2.5)}}>
          Remember the password
          <Text style={{color: Colours.lightgreen}}> Sign In</Text>
        </Text>
      </View>
      <PrimaryButton
        title={'NEXT'}
        btnStyle={{position: 'absolute', top: 550}}
      />
    </View>
  );
};

export default ForgotPasswordEmail;

const styles = StyleSheet.create({});
