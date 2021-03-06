
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Provider } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #C4C4C4;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Regular';
  line-height: 30px;
`;

export const UserName = styled.Text`
  color: black;
  font-family: 'RobotoSlab-Medium';
`;

export const ProfileButton = styled.TouchableOpacity`
  margin-right: 20px;
  background-color: white;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px 16px;
`;

export const ProviderContainer = styled(RectButton)`
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const ProviderAvatar = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

export const ProviderInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const ProviderName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #f4ede8;
`;

export const ProviderMeta = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const ProviderMetaText = styled.Text`
  margin-left: 8px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
`;

export const ProvidersListTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  width: 60%;
  align-items: center;
`

export const FeatureContainer = styled.View`
  width: 100%;
`
export const FeatureItem = styled(TouchableOpacity)`
  margin: 0px 20px;
  padding: 10px 20px;
  height: 150px;
  border-bottom-color: #D6D6D6;
  border-bottom-width: 1px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const FeatureItemTitle = styled.Text`
  font-size: 22px;
  font-weight: 600;
`

export const FeatureItemSubtitle = styled.Text`
  font-weight: 300;
  font-size: 16px;
`
