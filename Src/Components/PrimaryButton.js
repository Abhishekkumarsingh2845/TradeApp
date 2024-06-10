import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {wp, hp} from '../Utlis/Responsive';
import Colours from '../Constants/Colors';

const PrimaryButton = ({title, btnStyle, textStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{...styles.loginButton, ...btnStyle}}
      onPress={() => {
        onPress();
      }}>
      <Text style={{...styles.loginButtonText, ...textStyle}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    height: hp(7),
    width: '100%',
    backgroundColor: Colours.primary,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(2),
  },
  loginButtonText: {
    fontSize: wp(5),
    fontWeight: '700',
    letterSpacing: 2,
    color: Colours.white,
  },
});

export default PrimaryButton;
