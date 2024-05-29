import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'
import Strings from '../Constants/Strings'
import Colours from '../Constants/Colors'
import { wp,hp } from '../Utlis/Responsive'


const Email = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <View style={styles.Inner}>
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={Colours.black}
              style={styles.TextInp}
            />
          </View>
    </View>
  )
}

export default Email

const styles = StyleSheet.create({

   container:
   {
    justifyContent: 'flex-end',
    alignItems: 'center',
   },
  Inner: {
    width: wp(90),
    height: hp(7),
    backgroundColor: Colours.whitesmoke,
    borderWidth: wp(0.1),
    borderRadius: 9,
    borderColor: Colours.grey,
    paddingHorizontal: wp(2),
  },
  TextInp: {
    width: '90%',
  },
})