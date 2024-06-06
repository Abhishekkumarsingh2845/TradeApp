import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';

import Colours from '../Constants/Colors';
import Input from '../Components/Input';
import {hp, wp} from '../Utlis/Responsive';
import PrimaryButton from '../Components/PrimaryButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ForgotPasswordEmail = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar barStyle="dark-content" backgroundColor={Colours.white} />
      <KeyboardAwareScrollView>
        <View
          style={{
            alignItems: 'center',
            width: '100%',
            height: hp(50),
          }}>
          <Image
            source={require('./../Assets/Img/forgotpassword.png')}
            style={{width: '80%', height: '80%', resizeMode: 'contain'}}
          />
        </View>
        <View style={{paddingHorizontal: wp(3), marginTop: hp(-7)}}>
          <Text
            style={{fontSize: hp(3), color: Colours.black, fontWeight: 'bold'}}>
            Forgot Password
          </Text>
          <Input
            placeholder={'Enter the Email Address or Phone Number'}
            placeholderColour="grey"
            containerStyle={{marginVertical: 17}}
          />
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: 'bold',
                color: Colours.black,
                textDecorationLine: 'underline',
                fontSize: hp(2.5),
              }}>
              Remember the password
              <Text
                style={{
                  color: Colours.lightgreen,
                  textDecorationLine: 'underline',
                }}>
                {' '}
                Sign in
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <PrimaryButton
          title={'NEXT'}
          btnStyle={{
            marginTop: 100,
            width: '95%',
            alignSelf: 'center',
          }}
          onPress={() => {
            navigation.navigate('ForgotPasswordEmail2');
          }}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ForgotPasswordEmail;

const styles = StyleSheet.create({});
