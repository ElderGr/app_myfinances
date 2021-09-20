import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { Container, Title } from './style'

const Dashboard: React.FC = () => {
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
            <View>
              <Title>Faça seu logon</Title>
            </View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
  );
}

export default Dashboard;
