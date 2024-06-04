import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {hp, wp} from '../Utlis/Responsive';

const SelectPeople = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        marginTop: 22,
      }}>
      <View
        style={{
          backgroundColor: 'white',
          paddingVertical: 15,
          marginHorizontal: 12,
           flexDirection:'row',
          borderColor: 'grey',
          borderRadius: 12,
          elevation: 12,
        }}>
        <Image
          source={require('./../Assets/Img/icon.png')}
          style={{width: 40, height: 40, marginLeft: 10}}
        />
        <View style={{marginLeft:12}}>
            <Text style={{fontSize:19,color:'black'}}>Aggegators</Text>
            <Text style={{fontSize:13,color:'#6C757D'}}>Company Name</Text>
        </View>
        <View style={{width:20,height:20,borderWidth:2,borderRadius:10,alignSelf:'center',marginLeft:wp(35)}}/>
      </View>
    </View>
  );
};

export default SelectPeople;

const styles = StyleSheet.create({});
