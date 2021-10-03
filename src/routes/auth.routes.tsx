import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Spending from '../pages/Spending';
import BalanceUpdate from '../pages/BalanceUpdate';
import Success from '../pages/Success';

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
    <App.Screen name="BalanceUpdate" component={BalanceUpdate} />
    <App.Screen name="Success" component={Success} />
  </App.Navigator>
);

export default AuthRoutes;
