import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ptBR } from 'date-fns/locale'

import {
  Container,
  Header,
  FeatureItem,
  FeatureItemTitle,
  FeatureItemSubtitle,
  LabelContainer,
  FeatureItemTextContainer,
  MainInfoContainer,
  FeatureYearItem,
  FeatureYearItemText,
  FeatureYearText,
  MonthContainer,
  MonthsMainContainer,
  MonthContainerTitle,
  MonthTitle,
  MonthBalanceLabel,
  MonthBalanceText
} from './styles';

export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const [months, setMonths] = useState<number[]>([])

  useEffect(() => {
    function mountMonths(){
      const months = Array.from({ length: 12 }, (_, index) => {
        const month = ptBR.localize?.month(index)
        return month[0].toUpperCase() + month.slice(1)
      })

      setMonths(months)
    }

    mountMonths()
  }, [])

  return (
    <Container>
      <Header>
        <LabelContainer onPress={() => navigate('Home')}>
          <Icon name='chevron-left' size={30} />
          <Text>Voltar</Text>
        </LabelContainer>

        <MainInfoContainer>
          <View>
            <FeatureItemSubtitle>Saldo atual</FeatureItemSubtitle>
            <FeatureItemTitle>R$ 2.000,00</FeatureItemTitle>
          </View>
          <View style={{ paddingRight: 20 }}>
            <FeatureItemSubtitle>Mês atual</FeatureItemSubtitle>
            <FeatureItemTitle>Setembro</FeatureItemTitle>
          </View>
        </MainInfoContainer>

        <FeatureItem onPress={() => navigate('BalanceUpdate')}>
          <Icon name='refresh-ccw' size={30} />
          <FeatureItemTextContainer>
            <FeatureItemSubtitle>Atualizar saldo</FeatureItemSubtitle>
            <FeatureItemTitle>Atualize o saldo do começo do mês atual</FeatureItemTitle>
          </FeatureItemTextContainer>
          <Icon name='chevron-right' size={30} />
        </FeatureItem>

        <FeatureItem>
          <Icon name='dollar-sign' size={30} />
          <FeatureItemTextContainer>
            <FeatureItemSubtitle>Novo Lançamento</FeatureItemSubtitle>
            <FeatureItemTitle>Lance um novo gasto em seu mês</FeatureItemTitle>
          </FeatureItemTextContainer>
          <Icon name='chevron-right' size={30} />
        </FeatureItem>

        <View>
          <View>
            <FeatureYearText>Ano</FeatureYearText>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={true}
            horizontal
          >
            <FeatureYearItem>
              <FeatureYearItemText>2020</FeatureYearItemText>
            </FeatureYearItem>
            <FeatureYearItem>
              <FeatureYearItemText>2021</FeatureYearItemText>
            </FeatureYearItem>
            <FeatureYearItem>
              <FeatureYearItemText>2022</FeatureYearItemText>
            </FeatureYearItem>
          </ScrollView>
        </View>
      </Header>
      <MonthsMainContainer>
        {months.map((month, index) => (
          <MonthContainer key={index}>
            <MonthContainerTitle>
              <MonthTitle>{month}</MonthTitle>
              <Icon name='chevron-right' size={20} />
            </MonthContainerTitle>
            <MonthBalanceLabel>Saldo final</MonthBalanceLabel>
            <MonthBalanceText>R$ 20,00</MonthBalanceText>
          </MonthContainer>
        ))}
      </MonthsMainContainer>
    </Container>
  );
};

export default Home;
