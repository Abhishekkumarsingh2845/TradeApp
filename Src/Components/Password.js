import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {wp, hp} from '../Utlis/Responsive';
import Strings from '../Constants/Strings';
import Images from '../Constants/Images';
import Colours from '../Constants/Colors';

const Password = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.outer}>
        <TextInput
          placeholder={Strings.password}
          placeholderTextColor={Colours.black}
          secureTextEntry={!passwordVisible}
          style={styles.TextInp}
        />

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
      </View>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  TextInp: {
    width: '90%',
  },
  outer: {
    width: wp(90),
    height: hp(7),
    backgroundColor: Colours.whitesmoke,
    borderWidth: wp(0.1),
    borderRadius: 9,
    borderColor: Colours.grey,
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
