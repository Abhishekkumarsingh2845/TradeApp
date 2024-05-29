import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { wp,hp } from '../Utlis/Responsive';
import Colours from '../Constants/Colors';




const LoginButton = ({title,Col,til}) => {
  return (
    <View style={styles.container}>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={{...styles.loginButton,...Col}}>
          <Text style={{...styles.loginButtonText,...til}}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  ButtonContainer: {
    width: wp(90),
    height: hp(22),
    justifyContent: 'space-evenly',
 
  },
  loginButton: {
    width: wp(90),
    height: hp(8),
    backgroundColor:Colours.primary,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: wp(5),
    fontWeight: '700',
    letterSpacing: 4,
    color: Colours.white,
  },
});

 export default LoginButton;