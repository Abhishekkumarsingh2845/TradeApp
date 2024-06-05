import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../Utlis/Responsive';

const SelectPeople = () => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  
  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingVertical: 15,
        marginHorizontal: 12,
        flexDirection: 'row',
        borderColor: 'grey',
        marginTop: 1,
        borderRadius: 12,
        borderBottomWidth:0.2,
        shadowColor: "#000",
      
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
      }}>
      <Image
        source={require('./../Assets/Img/icon.png')}
        style={{width: 40, height: 40, marginLeft: 10}}
      />
      <View style={{marginLeft: 12}}>
        <Text style={{fontSize: 19, color: 'black'}}>Aggegators</Text>
        <Text style={{fontSize: 13, color: '#6C757D'}}>Company Name</Text>
      </View>
      <TouchableOpacity onPress={toggleSelection}>
      <View style={styles.outerCircle}>
        {isSelected && (
          <View style={styles.innerCircle} />
        )}
      </View>
    </TouchableOpacity>
     
    </View>
  );
};

export default SelectPeople;

const styles = StyleSheet.create({
    outerCircle: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: 'center',
        marginLeft: wp(35),
        padding: 2,
        borderColor: 'black', // You can specify border color if needed
      },
      innerCircle: {
        width: 12,
        height: 12,
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 12,
        marginTop: -0.1,
        backgroundColor: 'black',
      },
});
