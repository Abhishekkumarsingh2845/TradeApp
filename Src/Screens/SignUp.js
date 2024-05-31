import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import Input from '../Components/Input';
import Strings from '../Constants/Strings';
import {hp, wp} from '../Utlis/Responsive';
import Colours from '../Constants/Colors';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneInp from '../Components/PhoneInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


const tickImage = require('./../Assets/Img/check.png');


const SignUp = () => {
  const bottomSheetRef = React.useRef(null);
  const [isSelected, setSelection] = useState(false);

  const handleCheckBox = () => {
    setSelection(!isSelected);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colours.white} />
      <KeyboardAwareScrollView>
        <View style={styles.inputContainer}>
          <Input placeholder={Strings.name} />
          <Input placeholder={Strings.email} />

          <View style={{marginVertical: 8}}>
            <PhoneInp />
          </View>

          <Input placeholder={Strings.password} isPassword={true} />
          <Input placeholder={Strings.confirmpassword} isPassword={true} />
        </View>
        <View style={styles.disclaimerContainer}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={handleCheckBox}>
            <View style={styles.checkbox}>
              {isSelected && (
                <Image source={tickImage} style={styles.tickImage} />
              )}
            </View>
          </TouchableOpacity>
          <Text style={styles.textread}>
            I have by accept all{' '}
            <Text style={styles.clicktext}>terms & conditions</Text>
            <Text> &</Text>
            <Text style={styles.clicktext}>{'\n'}Privacy Policy.</Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="SIGN UP NOW"
            onPress={() => bottomSheetRef?.current?.open()}
          />
        </View>
      </KeyboardAwareScrollView>

    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: wp(3.5),
  },
  inputContainer: {
    marginTop: hp(13),
  },
  disclaimerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(2.5),
  },
  checkboxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(4),
  },
  checkbox: {
    width: wp(8),
    height: hp(4),
    borderRadius: 7,
    borderColor: 'black',
    borderWidth: 1.5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickImage: {
    width: 25,
    height: 25,
  },
  textread: {
    fontFamily: 'Poppins',
    fontSize: 15,
    color: 'grey',
  },
  clicktext: {
    fontFamily: 'Poppins',
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    marginTop: hp(19),
  },
});
