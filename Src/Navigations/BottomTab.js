import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Portfolio from '../Screens/Portfolio';
import Setting from '../Screens/Setting';
import TopTab from './TopTab';

const Tab = createBottomTabNavigator();

const TabIconLabel = ({ label, source, color, focused }) => (
  <View style={styles.tabBarItem}>
    <Image source={source} style={[styles.icon, { tintColor: color }]} />
    <Text style={[styles.label, { color, fontWeight: focused ? 'bold' : 'normal' }]}>
      {label}
    </Text>
  </View>
);

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { height: 1 },
        tabBarStyle: {
          // backgroundColor: 'blue', // Add your desired background color
          borderTopWidth: 0,
          height: 60, // Custom height for the tab bar
          // paddingVertical: 15, // Custom padding for the tab bar
        },
        tabBarActiveTintColor: 'black', // Active tab color
        tabBarInactiveTintColor: 'gray', // Inactive tab color
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIconLabel
              label="Home"
              source={require('./../Assets/Img/TabHome.png')}
              color={color}
              focused={focused}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="TopTab"
        component={TopTab}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIconLabel
              label="Portfolio"
              source={require('./../Assets/Img/portfolio.png')}
              color={color}
              focused={focused}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIconLabel
              label="Setting"
              source={require('./../Assets/Img/setting.png')}
              color={color}
              focused={focused}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabBarItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 28,
    height: 28,
  },
  label: {
    fontSize: 12,
    marginTop: 2,
  },
});
