import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { hp, wp } from '../Utlis/Responsive';
import Colours from '../Constants/Colors';

const TickText = ({ Title }) => {
  const [isTicked, setIsTicked] = useState(false);

  const handlePress = () => {
    setIsTicked(!isTicked);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.tickBox}>
        {isTicked && (
          <Image
            source={require('../Assets/Img/check.png')} // Replace with your tick image path
            style={styles.tickImage}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.title}>{Title}</Text>
    </View>
  );
};

export default TickText;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: hp(2),
  },
  tickBox: {
    width: wp(6),
    height: hp(3),
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colours.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickImage: {
    width: wp(6),
    height: hp(6),
    resizeMode: 'contain',
    tintColor: 'grey',
  },
  title: {
    fontSize: hp(2),
    color: 'black',
    marginLeft: wp(5),
  },
});
