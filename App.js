import { View, Text } from 'react-native'
import React from 'react'
import Login from './Src/Screens/SignIn'
import PopupModel from './Src/Components/OTPModal'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import SignUp from './Src/Screens/SignUp'

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
        {/* <Login/>   */}
     <SignUp/>
    </GestureHandlerRootView>
  )
}

export default App
