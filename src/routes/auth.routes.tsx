import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Spending from '../pages/Spending';

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
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Spending" component={Spending} />
  </App.Navigator>
);

export default AuthRoutes;
