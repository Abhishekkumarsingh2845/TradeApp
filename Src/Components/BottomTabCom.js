import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from '../Navigations/BottomTab'

const BottomTabCom = () => {
  return (
   <NavigationContainer>
    <BottomTab/>
   </NavigationContainer>
  )
}

export default BottomTabCom

const styles = StyleSheet.create({})