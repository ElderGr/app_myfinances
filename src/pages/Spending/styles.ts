
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Provider } from './index';

export const Container = styled(ScrollView)`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #C4C4C4;
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

export const FeatureItemTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
`

export const FeatureItemSubtitle = styled.Text`
  font-weight: 300;
  font-size: 15px;
`
export const LabelContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const MainInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;
`

export const FeatureItem = styled(TouchableOpacity)`
  justify-content: space-between;
  padding: 18px 10px;
  flex-direction: row;
  align-items: center;
`

export const FeatureItemTextContainer = styled.View`
  width: 65%;
`

export const FeatureYearText = styled.Text`
  font-weight: 300;
  font-size: 15px;
  margin-bottom: 15px;
`

export const FeatureYearItem = styled(TouchableOpacity)`
  border-radius: 20px;
  background-color: #8A8A8A;
  width: 150px;
  height: 40px;
  margin-right: 10px;
  text-align: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const FeatureYearItemText = styled.Text``

export const MonthsMainContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 15px 0;
`

export const MonthContainer = styled(TouchableOpacity)`
  width: 200px;
  margin: 5px 0;
  border-radius: 10px;
  padding: 20px 10px;
  background-color: #E5E5E5;
`
export const MonthContainerTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`

export const MonthTitle = styled.Text`
  font-size: 20px;
`
export const MonthBalanceLabel = styled.Text`
  font-weight: 300;
  font-size: 13px;
`

export const MonthBalanceText = styled.Text`
  font-weight: 400;
  font-size: 18px;
`
