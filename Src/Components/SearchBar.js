import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../Utlis/Responsive';

const SearchBar = () => {
  return (
    <View
      style={{
        borderColor: 'grey',
        borderWidth: 1,
        marginHorizontal: 15,
        borderRadius: 18,
        marginTop: hp(1),
      }}>
      <View
        style={{
          paddingHorizontal: 0,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',

          borderRadius: 18,
        }}>
        <TouchableOpacity>
          <Image
            source={require('./../Assets/Img/search.png')}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              marginLeft: wp(4),
            }}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          placeholderTextColor="grey"
          style={{
            marginLeft: wp(3),
            width: '70%',
            color: 'black',
            paddingVertical: 6,
          }}
        />
        <TouchableOpacity>
          <Image
            source={require('./../Assets/Img/cross.png')}
            style={{
              width: 20,
              height: 20,
              resizeMode: 'contain',
              marginLeft: wp(5),
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
