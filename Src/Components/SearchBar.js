import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {hp, wp} from '../Utlis/Responsive';

const SearchBar = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        marginHorizontal: 15,
        borderRadius: 18,
        marginTop:hp(4),
    
      }}>
      <View
        style={{
          padding: 0,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Image
          source={require('./../Assets/Img/search.png')}
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            marginLeft: wp(4),
          }}
        />
        <TextInput
          placeholder="Search"
          placeholderTextColor="grey"
          style={{marginLeft: wp(3)}}
        />
        <Image
          source={require('./../Assets/Img/cross.png')}
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            marginLeft: wp(52),
          }}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
