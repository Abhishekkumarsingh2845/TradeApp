// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Colours from './Src/Constants/Colors';
// import SignUp from './Src/Screens/SignUp';
// import Login from './Src/Screens/SignIn';
// import FormPoint from './Src/Screens/FormPoint';
// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="SignIn"
//           component={Login}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="SignUp"
//           component={SignUp}
//           options={{
//             headerTitle: 'SIGN UP',
//             headerTitleAlign: 'center',
//             headerTitleStyle: {
//               fontSize: 20,
//               fontWeight: 'bold',
//               color: '#3FCC97',
//             },
//             headerStyle: {
//               backgroundColor: 'white', // Background color of the header
//             },
//           }}
//         />
// <Stack.Screen name="FormPoint" component={FormPoint}  options={{
//             headerTitle: '100 POINT FORM',
//             headerTitleAlign: 'center',
//             headerTitleStyle: {
//               fontSize: 20,
//               fontWeight: 'bold',
//               color: '#3FCC97',
//             },
//             headerStyle: {
//               backgroundColor: 'white', // Background color of the header
//             },
//           }}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Perference from './Src/Screens/Perference'

const App = () => {
  return (
    <View style={{flex:1}}>
    <Perference/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
