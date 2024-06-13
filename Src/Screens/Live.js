import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {wp, hp} from '../Utlis/Responsive';
import Colours from '../Constants/Colors';

const Live = () => {
  return (
    <View style={{paddingHorizontal: wp(2)}}>
      <View
        style={{
          backgroundColor: 'white',
          elevation: 3,
          borderRadius: 8,
          marginTop: hp(2),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: wp(2),
            marginTop: hp(1.5),
          }}>
          <Text style={{color: '#6C757D'}}>Portfolio</Text>
          <Image
            source={require('./../Assets/Img/info.png')}
            style={{width: 15, height: 20, resizeMode: 'contain'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: hp(3),
            paddingHorizontal: wp(17),
          }}>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: hp(3)}}>
              $4.3
            </Text>
            <Text style={{}}>Investment</Text>
          </View>
          <View style={{borderWidth: 0.5, borderColor: '#6C757D'}}></View>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: hp(3)}}>
              -$4.3
            </Text>
            <Text>Return</Text>
          </View>
        </View>
        <View style={{marginVertical: hp(2), paddingHorizontal: wp(2)}}>
          <Text style={{color: 'black'}}>Total Return: $0</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: hp(2),
          paddingHorizontal: wp(2),
        }}>
        <Text style={{color: '#6C757D'}}>Close Trades</Text>
        <Image
          source={require('./../Assets/Img/reverse.png')}
          style={{width: 20, height: 20, resizeMode: 'contain'}}
        />
      </View>
      <View>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            elevation: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: hp(1),
            marginTop: hp(1),
          }}>
          <Image
            source={require('./../Assets/Img/liveImage.png')}
            style={{
              width: 40,
              height: 40,
              resizeMode: 'contain',
              marginVertical: hp(2),
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              position: 'absolute',
              left: wp(16),
              top: hp(2.3),
            }}>
            <Text style={{color: 'black', fontWeight: '500'}}>Rohan Group</Text>
            <Text style={{color: 'grey'}}>EnterPrice Pvt.Ltd</Text>
          </View>
          <View style={{justifyContent: 'space-between'}}>
            <Text
              style={{color: '#343A40', marginTop: hp(2.8), fontSize: hp(2.5)}}>
              $1,900.75
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'start',
              }}>
              <Text style={{color: 'grey',fontSize: hp(2)}}>Pending</Text>
              <Image
                source={require('./../Assets/Img/device_reset.png')}
                style={{width: 15, height: 19, resizeMode: 'contain'}}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            elevation: 3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: hp(1),
            marginTop: hp(1),
          }}>
          <Image
            source={require('./../Assets/Img/liveImage.png')}
            style={{
              width: 40,
              height: 40,
              resizeMode: 'contain',
              marginVertical: hp(2),
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              position: 'absolute',
              left: wp(16),
              top: hp(2.3),
            }}>
            <Text style={{color: 'black', fontWeight: '500'}}>Rohan Group</Text>
            <Text style={{color: 'grey'}}>ESCS US $200.00</Text>
          </View>
          <View style={{justifyContent: 'space-between'}}>
            <Text
              style={{color: '#343A40', marginTop: hp(2.8), fontSize: hp(2.5)}}>
              $1,900.75
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'start',
              }}>
              <Text style={{color: 'grey', fontSize: hp(2)}}>View</Text>
              <View style={{marginBottom: 4,marginLeft:2}}>
                <TouchableOpacity>
                  <View style={styles.circle}>
                    <Text style={styles.number}>1</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Live;

const styles = StyleSheet.create({
  circle: {
    width: 20,
    height: 20,
    borderRadius: 25,
    backgroundColor: Colours.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    color: 'white',
    fontSize: hp(2),
    fontWeight: 'bold',
  },
});
