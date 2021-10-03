
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled(ScrollView)`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #C4C4C4;
`;

export const FeatureItemTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
`

export const FeatureItemSubtitle = styled.Text`
  font-weight: 300;
  font-size: 15px;
`
export const LabelContainer = styled(TouchableOpacity)`
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
