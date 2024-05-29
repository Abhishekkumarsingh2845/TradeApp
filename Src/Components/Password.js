import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { wp, hp } from '../Utlis/Responsive';
import Strings from '../Constants/Strings';
import Images from '../Constants/Images';

const Password = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
      <View style={styles.outer}>
        <TextInput
          placeholder={Strings.password}
          placeholderTextColor="black"
          secureTextEntry={!passwordVisible}
          style={styles.TextInp}
        />
        
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}>
          <Image
            source={
              passwordVisible
                ?  Images.hide // Hidden icon
                :  Images.show // Visible icon
            }
            style={styles.hideIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  TextInp: {
    width: '90%',
    color: 'black',
  },
  outer: {
    width: wp(90),
    height: hp(7),
    backgroundColor: 'whitesmoke',
    borderWidth: wp(0.1),
    borderRadius: 9,
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(2),
  },
  hideIcon: {
    marginRight: wp(5),
    width: wp(6.5),
    height: hp(3),
  },
});



