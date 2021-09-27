import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useAuth } from '../hooks/Auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes'

const Routes: React.FC = () => {
  const { user, loading } = useAuth()

  if(loading){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    )
  }

  return user ? <AuthRoutes /> : <AppRoutes />;
};

export default Routes;
