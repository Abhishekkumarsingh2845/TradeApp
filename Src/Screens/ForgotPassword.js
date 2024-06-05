import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colours from '../Constants/Colors';
import Input from '../Components/Input';
import {hp, wp} from '../Utlis/Responsive';
import PrimaryButton from '../Components/PrimaryButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ForgotPassword = () => {
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
            source={require('./../Assets/Img/repair.png')}
            style={{width: '80%', height: '80%', resizeMode: 'contain'}}
          />
        </View>
        <View style={{paddingHorizontal: wp(3), marginTop: hp(-8)}}>
          <Text
            style={{fontSize: hp(3), color: Colours.black, fontWeight: 'bold'}}>
            Change New Password
          </Text>
          <Input
            placeholder={'Enter New Password'}
            placeholderColour="grey"
            containerStyle={{marginTop: hp(2)}}
          />
          <Input
            placeholder={'Confirm New Password'}
            placeholderColour="grey"
            containerStyle={{marginTop: hp(1)}}
          />
        </View>
        <PrimaryButton
          title={'UPDATE'}
          btnStyle={{
            marginTop: hp(22),
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

export default ForgotPassword;

const styles = StyleSheet.create({});
