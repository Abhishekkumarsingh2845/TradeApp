import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {wp, hp} from '../Utlis/Responsive';

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
            <Text style={{color: 'black', fontWeight: 'bold'}}>$4.3</Text>
            <Text style={{}}>Investment</Text>
          </View>
          <View style={{borderWidth: 0.5, borderColor: '#6C757D'}}></View>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold'}}>-$4.3</Text>
            <Text>Return</Text>
          </View>
        </View>
        <View style={{marginVertical: hp(2)}}>
          <Text style={{color: 'black'}}>Total Return: $0</Text>
        </View>
      </View>
    </View>
  );
};

export default Live;

const styles = StyleSheet.create({});
