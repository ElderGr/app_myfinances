import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #C4C4C4;
  flex-direction: row;
  align-items: center;
  ${(props: any) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props: any) =>
    props.isFocused &&
    css`
      border-color: #00AEE4;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #000;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
