import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { wp,hp } from '../Utlis/Responsive';
import Colours from '../Constants/Colors';




const PrimaryButton = ({title,btnStyle,textStyle}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={{...styles.loginButton,...btnStyle}}>
          <Text style={{...styles.loginButtonText,...textStyle}}>{title}</Text>
        </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-around',
    alignItems: 'center',
    
  },

  loginButton: {
    width: wp(80),
    height: hp(7),
    backgroundColor:Colours.primary,
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
});

 export default PrimaryButton;