import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../Utlis/Responsive';
import Slider from '@react-native-community/slider';
import Colours from '../Constants/Colors';

import AdvanceOption from './AdvanceOption';

const SellModalContent = ({navigation}) => {
  const [showComponent, setShowComponent] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [activeButton, setActiveButton] = useState('sell');
  const [price, setPrice] = useState(0);

  const increasePrice = () => {
    setPrice(price + 1);
  };

  const decreasePrice = () => {
    if (price > 0) {
      setPrice(price - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleTextPress = () => {
    setShowComponent(!showComponent);
  };

  const handleSellPress = () => {
    setActiveButton('sell');
  };

  const handleBuyPress = () => {
    setActiveButton('buy');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
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
            <Text
              style={[
                styles.buttonText,
                activeButton === 'sell' ? styles.whiteText : styles.blackText,
              ]}>
              SELL
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              activeButton === 'buy' ? styles.activeButton : null,
            ]}
            onPress={handleBuyPress}>
            <Text
              style={[
                styles.buttonText,
                activeButton === 'buy' ? styles.whiteText : styles.blackText,
              ]}>
              BUY
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '95%',
            paddingVertical: hp(2),
            backgroundColor: 'white',
            alignContent: 'center',
            justifyContent: 'center',
            marginVertical: hp(3),
            marginHorizontal: wp(2.7),
            elevation: 5,
            borderRadius: 10,
          }}>
          <View
            style={{
              borderRadius: 15,
              borderColor: 'grey',
              marginHorizontal: 5,
            }}>
            <View
              style={{
                paddingHorizontal: 12,
                justifyContent: 'space-between',
                marginTop: hp(1),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: hp(2),
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: wp(1),
                }}>
                <Text style={{fontSize: hp(3), color: 'black'}}>Price</Text>
                <Text style={{fontSize: hp(3), color: 'black'}}>${price}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: hp(2),
                }}>
                <TouchableOpacity onPress={decreasePrice}>
                  <Image
                    source={require('./../Assets/Img/sub.png')}
                    style={{width: 35, height: 35}}
                  />
                </TouchableOpacity>
                <Slider
                  style={{width: 170, height: 30}}
                  minimumTrackTintColor={'#3FCC97'}
                  maximumTrackTintColor={'grey'}
                  thumbTintColor={'#3FCC97'}
                  minimumValue={0}
                  maximumValue={5000}
                  value={price}
                  onValueChange={setPrice}
                  step={1}
                />
                <TouchableOpacity onPress={increasePrice}>
                  <Image
                    source={require('./../Assets/Img/plus.png')}
                    style={{width: 35, height: 35}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 12,
                justifyContent: 'space-between',
                marginTop: hp(2),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: hp(2),
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingHorizontal: wp(1),
                }}>
                <Text style={{fontSize: hp(3), color: 'black'}}>Quantity</Text>
                <Text style={{fontSize: hp(3), color: 'black'}}>
                  {quantity}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: hp(2),
                }}>
                <TouchableOpacity onPress={decreaseQuantity}>
                  <Image
                    source={require('./../Assets/Img/sub.png')}
                    style={{width: 35, height: 35}}
                  />
                </TouchableOpacity>
                <Slider
                  style={{width: 170, height: 30}}
                  minimumTrackTintColor={'#3FCC97'}
                  maximumTrackTintColor={'grey'}
                  thumbTintColor={'#3FCC97'}
                  minimumValue={0}
                  maximumValue={5000}
                  value={quantity}
                  onValueChange={setQuantity}
                  step={1}
                />
                <TouchableOpacity onPress={increaseQuantity}>
                  <Image
                    source={require('./../Assets/Img/plus.png')}
                    style={{width: 35, height: 35}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.orderBookContainer}>
          <Image
            source={require('./../Assets/Img/openBook.png')}
            style={styles.orderBookIcon}
          />
          <Text style={styles.orderBookText}>Order Book</Text>
          <Image
            source={require('./../Assets/Img/chevron_right.png')}
            style={styles.chevronIcon}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={styles.advancedOptionsContainer}
            onPress={handleTextPress}>
            <Text style={styles.advancedOptionsText}>Advanced Options</Text>
            <Image
              source={require('./../Assets/Img/chevron_right.png')}
              style={styles.chevronIconn}
            />
          </TouchableOpacity>
          {showComponent && <AdvanceOption />}
        </View>
        <TouchableOpacity style={styles.swipeContainer}>
          <Image
            source={require('./../Assets/Img/swipe.png')}
            style={styles.swipeIcon}
          />
          <Text style={styles.swipeText}>Swipe for Yes</Text>
        </TouchableOpacity>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>Available Balance: $10.00</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SellModalContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: hp(2),
    paddingHorizontal: wp(1),
  },
  contentRow: {
    marginHorizontal: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 40,
    height: 40,
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
    fontWeight: '400',
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
    width: '90%',
    borderRadius: 32,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'whitesmoke',
    elevation: 5,
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
    backgroundColor: Colours.primaryred,
  },
  // sliderContainer: {
  //   marginTop: hp(5),
  //   borderWidth: 0.3,
  //   borderRadius: 15,
  //   borderColor: 'grey',
  //   marginHorizontal: 5,
  //   height: '30%',
  // },
  // sliderContent: {
  //   paddingHorizontal: 12,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginTop: hp(2),
  // },
  // sliderLabel: {
  //   justifyContent: 'space-between',
  // },
  // sliderLabelText: {
  //   fontSize: hp(2.7),
  //   color: 'black',
  // },
  // slider: {
  //   width: 170,
  //   alignSelf: 'center',
  //   marginTop: 35,
  // },
  // sliderValue: {
  //   fontSize: hp(2.7),
  //   color: 'black',
  // },
  iconContainer: {
    alignItems: 'flex-start',
    marginTop: hp(2),
  },
  icon: {
    width: 35,
    height: 35,
  },
  orderBookContainer: {
    marginTop: hp(1.5),
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: hp(1.5),

    marginHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderBookIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginLeft: 15,
  },
  orderBookText: {
    color: 'black',
    marginLeft: 10,
  },
  chevronIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    position: 'absolute',
    right: 10,
  },
  advancedOptionsContainer: {
    marginTop: hp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 85,
  },
  chevronIconn: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },

  advancedOptionsText: {
    color: 'black',
    fontSize: hp(2.5),
  },
  swipeContainer: {
    marginTop: hp(3),
    backgroundColor: Colours.primaryred,
    marginHorizontal: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 20,
  },
  swipeIcon: {
    resizeMode: 'contain',
    width: 35,
    height: 35,
    position: 'absolute',
    left: 7,
  },
  swipeText: {
    fontSize: hp(3),
    color: 'white',
  },
  balanceContainer: {
    marginTop: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceText: {
    color: 'black',
  },
});
