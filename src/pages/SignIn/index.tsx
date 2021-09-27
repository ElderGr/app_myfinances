import React, { useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TextInput, View } from 'react-native';

import {
  Container,
  Title,
  SubTitle,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
  TitleContainer
} from './styles'
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core';
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useAuth } from '../../hooks/Auth';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const { signIn, user } = useAuth()

  const handleFormSubmit = useCallback(async () => {
    await signIn({
      email: '',
      password: ''
    })
  }, [])

  return (
    <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <TitleContainer>
              <Title>MyFinances</Title>
              <SubTitle>Faça seu logon</SubTitle>
            </TitleContainer>

            <Form
              ref={formRef}
              style={{ width: '100%' }}
              onSubmit={handleFormSubmit}
            >
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />


              <Button onPress={() => formRef.current?.submitForm()}>
                Entrar
              </Button>
            </Form>

            <ForgotPassword onPress={() => console.log('senha')}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>

        <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
          <Icon name="log-in" size={20} color="#00AEE4" />
          <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
        </CreateAccountButton>
      </KeyboardAvoidingView>
  );
}

export default SignIn;
