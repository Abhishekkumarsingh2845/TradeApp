import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {hp, wp} from './Src/Utlis/Responsive';
const Password = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View  style={{ justifyContent: 'flex-end',
    alignItems: 'center',}}>
     <View style={styles.outer}>
            <TextInput
              placeholder="   Password"
              placeholderTextColor="black"
              secureTextEntry={!passwordVisible}
              style={styles.TextInp}
            />
            <TouchableOpacity
              onPress={() => setPasswordVisible(!passwordVisible)}>
              <Image
                source={require('./Src/Assets/Img/Hide.png')}
                style={styles.hideIcon}
              />
            </TouchableOpacity>
          </View>
    </View>
  )
}

export default Password

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
  },
  hideIcon: {
    marginRight: wp(5),
  },
})