import React, { useCallback, useRef } from 'react';

import { Container, Header, LabelContainer, FeatureItemSubtitle, FeatureItemTitle, MainSubtitle, MainTitle, FormContainer } from './styles';
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import { FormHandles } from '@unform/core';
import Button from '../../components/Button';

const BalanceUpdate: React.FC = () => {
  const { navigate } = useNavigation();
  const formRef = useRef<FormHandles>(null)

  const handleSubmitForm = useCallback(() =>{
    navigate('Success')
  }, [])

  return(
    <Container>
      <Header>
        <LabelContainer onPress={() => navigate('Spending')}>
          <Icon name='chevron-left' size={30} />
          <Text>Voltar</Text>
        </LabelContainer>
        <View>
          <MainTitle>Atualizar saldo</MainTitle>
          <MainSubtitle>Atualize o saldo do mês que se encerrou com base em seu saldo real.</MainSubtitle>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <FeatureItemSubtitle>Saldo do mês anterior</FeatureItemSubtitle>
            <FeatureItemTitle>R$ 1.000</FeatureItemTitle>
          </View>

          <View>
            <FeatureItemSubtitle>Mês anterior</FeatureItemSubtitle>
            <FeatureItemTitle>Agosto</FeatureItemTitle>
          </View>
        </View>
      </Header>
      <FormContainer ref={formRef} onSubmit={handleSubmitForm}>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          name="email"
          placeholder="Valor atualizado"
          returnKeyType="next"
          onSubmitEditing={() => formRef.current?.submitForm()}
        />

        <Button onPress={() => formRef.current?.submitForm()}>
          Entrar
        </Button>
      </FormContainer>
    </Container>
  );
}

export default BalanceUpdate;
