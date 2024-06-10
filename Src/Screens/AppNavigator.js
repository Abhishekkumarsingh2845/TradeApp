// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './SignIn';
import SignUp from './SignUp';

const Stack = createStackNavigator();

const  AppNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SignIn" component={Login} />
//         <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
