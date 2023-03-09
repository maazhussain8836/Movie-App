import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Screen1 from './src/screens/Screen1'
import Screen2 from './src/screens/Screen2'
import Screen3 from './src/screens/Screen3'
import Navigation from './src/Navigation'
import AppContext from './src/components/AppContext'
import Sociallogin from './src/screens/Sociallogin'
import XCurve from './src/screens/XCurve'
import Loader from './src/components/Loader'

// chevron-back
// 000000e0
const App = () => {
  const [searchQuery, setSearchQuery] = useState(searchQuery);
  
  const value={
    searchQuery: searchQuery,
    setSearchQuery,
 
  }
  return (
    <AppContext.Provider value={value}>
    <View style={{flex:1}}>
{/* <Text>Maaz</Text> */}
      {/* <Screen1/> */}
      {/* <Screen2/> */}
      {/* <Screen3/> */}
      {/* <Sociallogin/> */}
      <Navigation/>
      {/* <Loader/> */}
      {/* <XCurve/> */}
      
    </View>
    </AppContext.Provider>
  )
}

export default App