// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Colours from './Src/Constants/Colors';
// import SignUp from './Src/Screens/SignUp';
// import Login from './Src/Screens/SignIn';
// import FormPoint from './Src/Screens/FormPoint';
// import Preference from './Src/Screens/Perference';
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

//           <Stack.Screen name="Perference" component={Preference}  options={{
//             headerShown: false
//           }}/>

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignUp2 from './Src/Screens/SignUp2'
import SearchBar from './Src/Components/SearchBar'
import SelectPeople from './Src/Components/SelectPeople'

const App = () => {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      {/* <SelectPeople/> */}

    <SignUp2/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})