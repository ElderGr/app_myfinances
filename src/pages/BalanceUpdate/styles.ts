import { Form } from '@unform/mobile';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native'

export const Container = styled(ScrollView)`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #C4C4C4;
`;

export const LabelContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`

export const FeatureItemTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`

export const FeatureItemSubtitle = styled.Text`
  font-weight: 300;
  font-size: 15px;
`
export const MainTitle = styled.Text`
  font-weight: 600;
  font-size: 22px;
  margin-top: 20px;
`

export const MainSubtitle = styled.Text`
  font-weight: 300;
  font-size: 15px;
  margin-bottom: 45px;
`

export const FormContainer = styled(Form)`
  height: 500px;
  justify-content: space-between;
  padding: 50px 20px 0;
`
