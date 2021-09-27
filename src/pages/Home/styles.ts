import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const TitleContainer = styled.View`
  margin: 64px 0 24px;
`

export const Title = styled.Text`
  font-size: 24px;
  color: #232129;
  font-family: 'RobotoSlab-Medium';
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  margin: 20px 0;
  color: #232129;
  font-family: 'RobotoSlab-Medium';
  text-align: center;
`;
