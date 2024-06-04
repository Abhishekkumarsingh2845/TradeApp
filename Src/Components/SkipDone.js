import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, wp } from './../Utlis/Responsive';

const SkipDone = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>SKIP</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>DONE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SkipDone;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: hp(8),
    alignItems: 'center',
    paddingHorizontal: wp(15),
    elevation: 15,
    backgroundColor: 'white',
  },
  text: {
    fontSize: hp(3),
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 3,
  },
});
