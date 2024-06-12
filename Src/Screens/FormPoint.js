import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {hp, wp} from '../Utlis/Responsive';
import Input from '../Components/Input';
import Colours from '../Constants/Colors';
import PrimaryButton from '../Components/PrimaryButton';
import Images from '../Constants/Images';
import Strings from '../Constants/Strings';

const FormPoint = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioButtonPress = option => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colours.white} />
      <KeyboardAwareScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{Strings.section}</Text>
          <Text style={styles.sectionSubtitle}>{Strings.general}</Text>
          <Input placeholder={Strings.fullname} placeholderColour={Colours.black} />
          <Input placeholder={Strings.tradingname} placeholderColour={Colours.black} />
          <Input placeholder={Strings.acn} placeholderColour={Colours.black} />
          <Input placeholder={Strings.abn}  placeholderColour={Colours.black}/>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionSubtitle}>
            {Strings.registered}
            <Text style={styles.inlineText}>(PO Box is NOT acceptable)</Text>
          </Text>
          <Input placeholder={Strings.street} placeholderColour={Colours.black} />
          <Input placeholder={Strings.Suburb} placeholderColour={Colours.black} />
          <Input placeholder={Strings.state}  placeholderColour={Colours.black}/>
          <Input placeholder={Strings.PostCode} placeholderColour={Colours.black}/>
          <Input placeholder={Strings.Country} placeholderColour={Colours.black} />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionSubtitle}>
            Principal Place Of Business
            <Text style={styles.inlineText}>
              (If any)(PO Box is Not acceptable)
            </Text>
          </Text>
          <Input placeholder={Strings.street} placeholderColour={Colours.black} />
          <Input placeholder={Strings.state}  placeholderColour={Colours.black}/>
          <Input placeholder={Strings.Suburb} placeholderColour={Colours.black} />
          <Input placeholder={Strings.PostCode}  placeholderColour={Colours.black}/>
          <Input placeholder={Strings.Country}  placeholderColour={Colours.black}/>
          <Input placeholder={Strings.MobileNumber} placeholderColour={Colours.black}/>
          <Input placeholder={Strings.FaxNumber} placeholderColour={Colours.black}/>
          <Input placeholder={Strings.email} placeholderColour={Colours.black}/>
          <Input placeholder="Alternate Number" placeholderColour={Colours.black} />
          <View style={styles.uploadContainer}>
            <Input
              placeholder="Document Upload"
              containerStyle={styles.uploadInput}
              placeholderColour={Colours.black}
            />
            <TouchableOpacity>
              <Image source={Images.upload} style={styles.uploadIcon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.noteText}>
            Companies incorporated outside of Australia should complete the
            FOREIGN COMPANIES IDENTIFICATION FORM, rather than this form.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionSubtitle}>
            Company Type
            <Text style={styles.inlineText}>
              (Select Only ONE of the following categories)
            </Text>
          </Text>
          <View style={styles.radioButtonContainer}>
            <TouchableOpacity
              onPress={() => handleRadioButtonPress('proprietary')}
              style={styles.radioButton}>
              {selectedOption === 'proprietary' && (
                <View style={styles.radioButtonSelected} />
              )}
            </TouchableOpacity>
            <Text style={styles.radioButtonLabel}>
              Proprietary (companies whose name ends{'\n'}with proprietary Ltd
              or pty Ltd; also known{'\n'}as private companies), proceed to 1.3
            </Text>
          </View>
          <View style={styles.radioButtonContainer}>
            <TouchableOpacity
              onPress={() => handleRadioButtonPress('public')}
              style={styles.radioButton}>
              {selectedOption === 'public' && (
                <View style={styles.radioButtonSelected} />
              )}
            </TouchableOpacity>
            <Text style={styles.radioButtonLabel}>
              Public (companies whose name does not{'\n'}include the word Pty or
              proprietary),{'\n'}proceed to 1.4
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionSubtitle}>
            Directors
            <Text style={styles.inlineText}>
              (Required for all Proprietary Companies as per 1.2, not required
              for Public Companies) Provide the names of all directors.
            </Text>
          </Text>
          <Input placeholder="Enter Name" placeholderColour={Colours.black} />
          <TouchableOpacity activeOpacity={0.9}>
            <View style={styles.addMoreContainer}>
              <Image source={Images.add} style={styles.addMoreIcon} />
              <Text style={styles.addMoreText}>ADD MORE</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.noteText}>
            If there are more directors, provide details on a separate sheet and
            tick this box ().
          </Text>
        </View>
        <PrimaryButton title="SUBMIT" onPress={()=>navigation.navigate('Preference')} />
        <View style={{height:40}}/>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.white,
    flex: 1,
    paddingTop: hp(2),
    paddingHorizontal: hp(2),
  },
  section: {
    backgroundColor: Colours.white,
    marginTop: 18,
  },
  sectionTitle: {
    fontSize: 10.5,
    color: Colours.black,
    fontWeight: '500',
  },
  sectionSubtitle: {
    color: Colours.black,
    marginTop: 11,
    fontSize: 16,
  },
  inlineText: {
    fontSize: 10,
  },
  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: wp(0.1),

    borderColor: Colours.grey,
    backgroundColor: Colours.whitesmoke,
    marginTop: 4.5,
    borderRadius: 9,
  },
  uploadInput: {
    width: '90%',
    borderWidth: 0,
    marginVertical: 0,
    backgroundColor: Colours.whitesmoke,
  },
  uploadIcon: {
    width: 20,
    height: 20,
  },
  noteText: {
    fontSize: 12,
    color: Colours.black,
    marginTop: 4.5,
    fontWeight: '500',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: Colours.grey,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioButtonSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colours.black,
  },
  radioButtonLabel: {
    fontSize: 15,
    color: Colours.black,
  },
  addMoreContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 12,
  },
  addMoreIcon: {
    width:25,
    height:25,
    marginRight: 6,
    resizeMode:'contain'
  },
  addMoreText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colours.grey,
    marginTop: 2,
  },
});

export default FormPoint;
