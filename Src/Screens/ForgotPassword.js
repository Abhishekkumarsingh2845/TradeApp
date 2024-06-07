import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
} from 'react-native';
import Colours from '../Constants/Colors';
import Input from '../Components/Input';
import {hp, wp} from '../Utlis/Responsive';
import PrimaryButton from '../Components/PrimaryButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colours.white} />
      <KeyboardAwareScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={require('./../Assets/Img/repair.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.title}>
            Change New Password
          </Text>
          <Input
            placeholder={'Enter New Password'}
            placeholderColour="grey"
            containerStyle={styles.inputContainer}
          />
          <Input
            placeholder={'Confirm New Password'}
            placeholderColour="grey"
            containerStyle={[styles.inputContainer, styles.confirmInput]}
          />
        </View>
 
      </KeyboardAwareScrollView>
      <PrimaryButton
          title={'UPDATE'}
          btnStyle={styles.button}
          onPress={() => {
            navigation.navigate('ForgotPassword2');
          }}
        />
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    width: '100%',
    height: hp(50),
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  formContainer: {
    paddingHorizontal: wp(3),
    marginTop: hp(-8),
  },
  title: {
    fontSize: hp(3),
    color: Colours.black,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: hp(2),
  },
  confirmInput: {
    marginTop: hp(1),
  },
  button: {
  
    width: '95%',
    alignSelf: 'center',
    position:'absolute',
    bottom:hp(2)
    
  },
});
