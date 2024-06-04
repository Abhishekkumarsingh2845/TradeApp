import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {hp, wp} from '../Utlis/Responsive';
import Colours from '../Constants/Colors';

import TickText from '../Components/TickText';
import Input from '../Components/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SkipDone from '../Components/SkipDone';
import Strings from '../Constants/Strings';

const paymentMethod = [
  {id: 1, Title: Strings.s1},
  {id: 2, Title: Strings.s2},
  {id: 3, Title: Strings.s3},
  {id: 4, Title: Strings.s4},
  {id: 4, Title: Strings.s5},
  {id: 5, Title: Strings.s6},
];

const Preference = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <StatusBar barStyle="dark-content" backgroundColor={Colours.white} />
        <KeyboardAwareScrollView>
          <Text style={styles.titleText}>{Strings.perference}</Text>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{Strings.payment}</Text>

            {paymentMethod.map(items => (
              <TickText Title={items.Title} />
            ))}
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{Strings.primaryperson}</Text>
            <View style={{marginTop: hp(1.5)}}>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Contact Number" />
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{Strings.secondaryperson}</Text>
            <View style={{marginTop: hp(1.5)}}>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Contact Number" />
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{Strings.otherperson}</Text>
            <View style={{marginTop: hp(1.5)}}>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Contact Number" />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
      <SkipDone />
    </View>
  );
};

export default Preference;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: hp(1),
    paddingHorizontal: hp(2),
  },
  titleText: {
    fontSize: hp(3),
    color: 'black',
    marginLeft: wp(3),
    fontWeight: 'bold',
  },
  section: {
    marginLeft: wp(3),
    marginTop: hp(4),
  },
  sectionTitle: {
    fontSize: hp(2.5),
    color: 'black',
    fontWeight: 'bold',
  },
});
