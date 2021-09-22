import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';

const App = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#F6F6F6',
      },
    }}
  >
    <App.Screen name="SignIn" component={SignIn} />
  </App.Navigator>
);

export default AuthRoutes;
