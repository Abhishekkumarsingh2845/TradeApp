import React, { useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { hp, wp } from '../Utlis/Responsive.js';
import OTPInput from './OtpInput.tsx';
import PrimaryButton from './PrimaryButton.js';
import Strings from '../Constants/Strings.js';
import Colours from '../Constants/Colors.js';

const OTPModal = () => {
  return (
    <KeyboardAvoidingView style={styles.modalContent}>
      <ModalHeader />
      <View style={styles.otpContainer}>
        <OTPInput defaultValue='' />
      </View>
      <PrimaryButton title={Strings.verifyotp} />
      <ResendOTP />
    </KeyboardAvoidingView>
  );
};

const ModalHeader = () => {
  return (
    <View style={styles.modalHeader}>
      <Text style={styles.headerText}>{Strings.entercode}</Text>
      <Text style={styles.headerText}>{Strings.enteremail}</Text>
      <Text style={styles.headerText}>{Strings.enterphone}</Text>
    </View>
  );
};

const ResendOTP = () => {
  return (
    <TouchableOpacity style={styles.resendContainer}>
      <Text style={styles.resendText}>{Strings.didnototp} </Text>
      <Text style={styles.resendLink}>{Strings.resendotp}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContent: {
    padding: 15,
  },
  modalHeader: {
    alignItems: 'center',
    marginVertical: hp(0.2),
    justifyContent: 'center',
  },
  headerText: {
    fontSize: hp(2.9),
    fontWeight: '600',
    color: Colours.black,
    textAlign: 'center',
    fontFamily: 'inter',
  },
  otpContainer: {
    marginHorizontal: wp(4.5),
    marginVertical: hp(-2),
  },
  resendContainer: {
    flexDirection: 'row',
    marginVertical: hp(2.2),
    justifyContent: 'center',
  },
  resendText: {
    color: Colours.black,
    fontSize: hp(2.5),
    fontWeight: '600',
    fontFamily: 'inter',
  },
  resendLink: {
    fontSize: hp(2.5),
    color: Colours.grey,
    textDecorationLine: 'underline',
    fontWeight: '600',
    fontFamily: 'inter',
  },
});

export default OTPModal;
