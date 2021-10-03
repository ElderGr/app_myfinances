import { useNavigation } from '@react-navigation/core';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';

import { Container, BodyContainer, MainSubtitle, MainTitle, MainContainer } from './styles';

const Success: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <BodyContainer>
        <MainContainer>
          <MainTitle>Atualizamos seu saldo!</MainTitle>
          <MainSubtitle>Agora você pode acompanhar seu saldo com mais exatidão</MainSubtitle>
          <Icon style={{ color: 'green', marginTop: 30 }} name='check-circle' size={50} />
        </MainContainer>
        <Button onPress={() => navigate('Spending')}>OK</Button>
      </BodyContainer>
    </Container>
  );
}

export default Success;
