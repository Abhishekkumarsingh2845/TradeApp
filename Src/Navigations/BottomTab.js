import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Portfolio from '../Screens/Portfolio';
import Setting from '../Screens/Setting';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerStyle: {height: 10}}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={require('./../Assets/Img/TabHome.png')}
              style={{width: 24, height: 24}}
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                color: 'black',
              }}>
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Porfolio"
        component={Portfolio}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={require('./../Assets/Img/portfolio.png')}
              style={{width: 24, height: 24}}
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                color: 'black',
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              Portfolio
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={require('./../Assets/Img/setting.png')}
              style={{width: 24, height: 24}}
            />
          ),
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                color: 'black',
                fontWeight: focused ? 'bold' : 'normal',
              }}>
              Setting
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
