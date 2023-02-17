import { View, Text } from 'react-native'
import React from 'react'
import Screen1 from './src/screens/Screen1'
import Screen2 from './src/screens/Screen2'
import Screen3 from './src/screens/Screen3'
import Navigation from './src/Navigation'
import Screen4 from './src/screens/Screen4'
// chevron-back
// 000000e0
const App = () => {
  return (
    <View style={{flex:1}}>

      {/* <Screen1/> */}
      {/* <Screen2/> */}
      {/* <Screen3/> */}
      {/* <Screen4/> */}
      <Navigation/>
    </View>
  )
}

export default App