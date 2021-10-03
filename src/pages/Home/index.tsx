import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import api from '../../services/api';

import { useAuth } from '../../hooks/Auth';
import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileContainer,
  UserAvatar,
  ProfileButton,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
  ProvidersListTitle,
  FeatureContainer,
  FeatureItem,
  FeatureItemTitle,
  FeatureItemSubtitle
} from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Home: React.FC = () => {
  const { signOut, user } = useAuth();
  const { navigate } = useNavigation();

  const [providers, setProviders] = useState<Provider[]>([]);

  // useEffect(() => {
  //   api.get('providers').then(response => {
  //     setProviders(response.data);
  //   });
  // }, []);

  // const navigateToProfile = useCallback(() => {
  //   navigate('Profile');
  // }, [navigate]);

  // const navigateToCreateAppointment = useCallback(
  //   (providerId: string) => {
  //     navigate('CreateAppointment', { providerId });
  //   },
  //   [navigate],
  // );

  return (
    <Container>
      <Header>
        <ProfileContainer>
          <ProfileButton onPress={() => console.log('')}>
            <Icon name='user' size={30} />
            {/* <UserAvatar source={{ uri: user.avatar_url }} /> */}
          </ProfileButton>
          <HeaderTitle>
            Bem vindo,
            {'\n'}
            <UserName>Gabriel</UserName>
          </HeaderTitle>
        </ProfileContainer>
        <Icon name='menu' size={30} />
      </Header>
      {/* <Button title="Sair" onPress={signOut} /> */}
      <FeatureContainer>
        <FeatureItem onPress={() => navigate('Spending')}>
          <View>
            <FeatureItemSubtitle>Seu saldo atual</FeatureItemSubtitle>
            <FeatureItemTitle>R$ 2.000,00</FeatureItemTitle>
          </View>
          <Icon name='chevron-right' size={30} />
        </FeatureItem>
        <FeatureItem>
          <View>
            <FeatureItemSubtitle>Próxima meta</FeatureItemSubtitle>
            <FeatureItemTitle>PS5</FeatureItemTitle>
          </View>
          <Icon name='chevron-right' size={30} />
        </FeatureItem>
      </FeatureContainer>
    </Container>
  );
};

export default Home;
