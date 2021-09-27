 import React from 'react';
 import {
   StatusBar,
   Text,
   View,
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import Routes from './routes'
  import AppProvider from './hooks'

 const App = () => {
   return (
     <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#F6F6F6" translucent />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '#F6F6F6' }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
   );
 };

 export default App;
