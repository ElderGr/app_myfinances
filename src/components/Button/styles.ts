import styled from 'styled-components/native';
// botão que possui uma estilização mais agradavel entre android/ios
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #00BE7A;
  border-radius: 10px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  font-size: 18px;
`;
