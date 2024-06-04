import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../Utlis/Responsive';
import Colours from '../Constants/Colors';
import SearchBar from '../Components/SearchBar';
import SelectPeople from '../Components/SelectPeople';

const SignUp2 = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
        <View>
      <ScrollView horizontal>
        <Text
          style={{fontSize: hp(3), color: 'black', marginHorizontal: wp(8)}}>
          Retailers
        </Text>
        <Text
          style={{fontSize: hp(3), color: 'black', marginHorizontal: wp(8)}}>
          Agreators
        </Text>
        <Text
          style={{fontSize: hp(3), color: 'black', marginHorizontal: wp(8)}}>
          Ap
        </Text>
         <Text
          style={{fontSize: hp(3), color: 'black', marginHorizontal: wp(8)}}>
          Ap
        </Text>
      </ScrollView>
      </View>
      <SearchBar/>
    <View style={{flex:1}}>
    <SelectPeople/>
  
    </View>
      
     
    
    </View>
  );
};

export default SignUp2;

const styles = StyleSheet.create({});
