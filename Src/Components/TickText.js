import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp,wp } from '../Utlis/Responsive'
import Colours from '../Constants/Colors'

const TickText = ({Title}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: hp(2)}}>
          <View
            style={{
              width: wp(6),
              height: hp(3),
              borderRadius: 4,
              borderWidth: 2,
              borderColor: Colours.grey,
            }}></View>
          <Text style={{fontSize: hp(2), color: 'black', marginLeft: wp(5)}}>
           {Title}
          </Text>
        </View>
  )
}

export default TickText

const styles = StyleSheet.create({})