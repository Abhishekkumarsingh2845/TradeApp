import { StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

import Colours from '../Constants/Colors';
import { wp, hp } from '../Utlis/Responsive';
import Images from '../Constants/Images'; // Ensure Images are imported

const Input = ({ placeholder, isPassword }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.emailContainer}>
        <TextInput
          placeholder={placeholder}
         placeholderTextColor={Colours.black}
          secureTextEntry={isPassword && !passwordVisible}
          style={styles.TextInp}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Image
              source={
                passwordVisible
                  ? Images.hide // Hidden icon
                  : Images.show // Visible icon
              }
              style={styles.hideIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical:hp(1),
  },
  emailContainer: {
    height: hp(6),
    backgroundColor: Colours.whitesmoke,
    borderWidth: wp(0.1),
    borderRadius: 9,
    borderColor: Colours.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(2),
  },
  TextInp: {
    flex:1,
    color:Colours.black,
   
  },
  hideIcon: {
    height:hp(3.6),
    width:hp(3.6)
  },
});
