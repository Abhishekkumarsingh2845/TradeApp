import {
  Image,
  StyleSheet,
  Text,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../Utlis/Responsive';
import Colours from '../Constants/Colors';

const AdvanceOption = () => {
  const [selected, setSelected] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerText}>Preferences</Text>
        <View style={styles.preferencesContainer}>
          <View style={styles.preferenceItem}>
            <TouchableOpacity
              style={[
                styles.checkbox,
                selected === 'first' && styles.selectedSquare,
              ]}
              onPress={() => setSelected('first')}>
              {selected === 'first' && (
                <Image
                  source={require('./../Assets/Img/check.png')}
                  style={styles.tick}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.preferenceText}>Advance Payment</Text>
          </View>
          <View style={styles.preferenceItem}>
          <TouchableOpacity
              style={[
                styles.checkbox,
                selected === 'second' && styles.selectedSquare,
              ]}
              onPress={() => setSelected('second')}>
              {selected === 'second' && (
                <Image
                  source={require('./../Assets/Img/check.png')}
                  style={styles.tick}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.preferenceText}>Delivery After Payment</Text>
            <TouchableOpacity style={styles.editButton}>
              <Image
                source={require('./../Assets/Img/edit.png')}
                style={styles.editIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.limitOrderButton}>
          <Text style={styles.limitOrderButtonText}>LIST A LIMIT ORDER</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.autoCancelButton}>
          <View style={styles.autoCancelContent}>
            <Image
              source={require('./../Assets/Img/Ac.png')}
              style={styles.autoCancelIcon}
            />
            <Text style={styles.autoCancelText}>Auto Cancel</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={styles.switch}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdvanceOption;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
  innerContainer: {
    width: '90%',
    borderTopWidth: 0.8,
    borderTopColor: Colours.greyshade1,
  },
  headerText: {
    fontSize: hp(3),
    color: 'black',
    marginTop: 5,
    fontWeight: 'bold',
  },
  preferencesContainer: {
    marginTop: hp(1),
    paddingVertical: 2,
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 8,
  },
  tick: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: Colours.greyshade1,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: Colours.greyshade1,

    borderWidth: 2,

    justifyContent: 'center',
    alignItems: 'center',
  },
  preferenceText: {
    marginLeft: hp(2),
    color: Colours.greyshades2,
    fontSize: hp(2.5),
  },
  editButton: {
    position: 'absolute',
    right: 0,
  },
  editIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  limitOrderButton: {
    backgroundColor: Colours.primary,
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 15,
    marginTop: hp(3),
  },
  limitOrderButtonText: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: 'white',
  },
  autoCancelButton: {
    backgroundColor: 'white',
    elevation: 3,
    paddingVertical: hp(0.5),
    borderRadius: 12,
    marginHorizontal: wp(-3),
    paddingHorizontal: wp(2),
    marginTop: hp(2.5),
  },
  autoCancelContent: {
    flexDirection: 'row',
    marginVertical: hp(1.5),
    marginHorizontal: wp(-3),
    alignItems: 'center',
    paddingHorizontal: wp(2),
  },
  autoCancelIcon: {
    width: 25,
    height: 25,
    borderRadius: 5,
    marginLeft: wp(3),
  },
  autoCancelText: {
    fontSize: hp(3),
    color: 'black',
    fontWeight: 'bold',
    marginLeft: wp(2),
  },
  switch: {
    position: 'absolute',
    right: 0,
  },
  selectedSquare: {
    borderColor: Colours.greyshade1,
  },
});
