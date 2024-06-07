import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { hp, wp } from '../Utlis/Responsive';

const SellModalContent = () => {
  const [activeButton, setActiveButton] = useState(null);

  // Function to handle press on SELL button
  const handleSellPress = () => {
    setActiveButton('sell');
  };

  // Function to handle press on BUY button
  const handleBuyPress = () => {
    setActiveButton('buy');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentRow}>
        <Image
          source={require('./../Assets/Img/goto.png')}
          style={styles.image}
        />
        <View style={styles.centeredTextContainerWithMargin}>
          <View style={styles.textRow}>
            <Text style={styles.baseText}>VEECS</Text>
            <Text style={styles.superscript}>(56 AUD/Unit)</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.greySmallText}>$200/100U US $200.00</Text>
          </View>
        </View>
        <View style={styles.centeredTextContainer}>
          <View style={styles.textRow}>
            <Text style={styles.smallText}>$2,509.75</Text>
          </View>
          <View style={styles.textRowRightAligned}>
            <Text style={styles.greenText}>+9.77%</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'sell' ? styles.activeButton : null,
          ]}
          onPress={handleSellPress}>
          <Text style={[styles.buttonText, activeButton === 'sell' ? styles.whiteText : styles.blackText]}>SELL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            activeButton === 'buy' ? styles.activeButton : null,
          ]}
          onPress={handleBuyPress}>
          <Text style={[styles.buttonText, activeButton === 'buy' ? styles.whiteText : styles.blackText]}>BUY</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:hp(5),}}>
        <Text style={{backgroundColor:'green'}}>e cen c</Text>
      </View>
    </View>
  );
};

export default SellModalContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: hp(2),
    paddingHorizontal: wp(2),
  },
  contentRow: {
    marginHorizontal: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  centeredTextContainer: {
    alignSelf: 'center',
  },
  centeredTextContainerWithMargin: {
    alignSelf: 'center',
    marginRight: wp(10),
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textRowRightAligned: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  baseText: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: 'black',
  },
  superscript: {
    fontSize: hp(1.8),
    lineHeight: 24,
    textAlignVertical: 'top',
    color: 'grey',
  },
  smallText: {
    fontSize: 12,
    color: 'black',
    fontWeight:'400',
  },
  greySmallText: {
    fontSize: hp(1.8),
    color: 'grey',
  },
  greenText: {
    fontSize: hp(2),
    color: 'green',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: hp(5),
    width: '95%',
    height: '8%',
    borderRadius: 32,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'whitesmoke',
    elevation:10,
  },
  button: {
    flex: 1,
    height: hp(6.8),
    backgroundColor: 'whitesmoke',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
  activeButton: {
    backgroundColor: 'red',
  },
 
});
