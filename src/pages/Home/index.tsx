import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native'
import Button from '../../components/Button';
import { useAuth } from '../../hooks/Auth';
import { Container, Title } from './styles';

const Home: React.FC = () => {
  const { signOut } = useAuth()

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
            <Title>
              Home
            </Title>
            <Button onPress={signOut} >
              Sair
            </Button>
          </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Home;
