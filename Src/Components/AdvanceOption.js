import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp} from '../Utlis/Responsive';
import Colours from '../Constants/Colors';

const AdvanceOption = () => {
  return (
    <View style={{marginTop: 10, alignItems: 'center'}}>
      <View
        style={{
          width: '90%',
          borderTopWidth: 0.8,
          borderTopColor: Colours.greyshade1,
       
        //   
        }}>
        <Text
          style={{
            fontSize: hp(3),
            color: 'black',
            marginTop: 5,
            fontWeight: 'bold',
          }}>
          Perfrences
        </Text>
        <View style={{marginTop: hp(1), paddingVertical: 2}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginVertical: 12,
            }}>
            <View
              style={{
                width: 20,
                height: 20,
                borderWidth: 2,
                borderRadius: 2,
                borderColor: Colours.greyshade1,
              }}></View>
            <Text
              style={{
                marginLeft: hp(2),
                color: Colours.greyshades2,
                fontSize: hp(2.5),
              }}>
              Advance Payment
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <View
              style={{
                width: 20,
                height: 20,
                borderWidth: 2,
                borderRadius: 2,
                borderColor: Colours.greyshade1,
              }}></View>
            <Text
              style={{
                marginLeft: hp(2),
                color: Colours.greyshades2,
                fontSize: hp(2.5),
              }}>
              Delivery After Payment
            </Text>
            <Image
              source={require('./../Assets/Img/edit.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                position: 'absolute',
                right: 0,
              }}
            />
          </View>
        </View>
        <TouchableOpacity style={{backgroundColor: Colours.primary,alignItems:'center',padding:12,borderRadius:12,marginHorizontal:15,marginTop:hp(3)}}>
          <Text style={{fontSize:hp(2.5),fontWeight:'bold',color:'white'}}>LIST A LIMIT ORDER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdvanceOption;

const styles = StyleSheet.create({});
