import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../Utlis/Responsive';
import Colours from '../Constants/Colors';
import Strings from '../Constants/Strings';
import TickText from '../Components/TickText';
import Input from '../Components/Input';

const data =[{id:1,}]
const Perference = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingTop: hp(2)}}>
      <Text
        style={{
          fontSize: hp(3),
          color: 'black',
          marginLeft: wp(6),
          fontWeight: 'bold',
        }}>
        Perference Settings
      </Text>
      <View style={{marginLeft: wp(6), marginTop: hp(4)}}>
        <Text style={{fontSize: hp(2.5), color: 'black', fontWeight: 'bold'}}>
          Payment Terms
        </Text>
        {/* <TickText Title={'I would like to make payment after delivery'} /> */}
        {[1,2,3,4,5,6].map(items=>(
            <TickText  />
        ))}
        {/* <TickText Title={'I can make payment in advance'} />
        <TickText Title={'I would like to make payment after delivery'} />
        <TickText Title={'I would like to make payment after delivery'} />
        <TickText Title={'I would like to make payment after delivery'} />
        <TickText Title={'I would like to make payment after delivery'} /> */}
      </View>
      <View style={{marginLeft: wp(6), marginTop: hp(4)}}>
        <Text style={{fontSize: hp(2.5), color: 'black', fontWeight: 'bold'}}>
          Primary Contact Person
        </Text>
        <View style={{}}> 
          <Input containerStyle={{width:'95%'}}/>
          <Input containerStyle={{width:'95%'}}/>
          <Input containerStyle={{width:'95%'}}/>
          <Input containerStyle={{width:'95%'}}/>
         
        </View>
      </View>
    </View>
  );
};

export default Perference;

const styles = StyleSheet.create({});
