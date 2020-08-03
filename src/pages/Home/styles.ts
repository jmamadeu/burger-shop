import Constants from 'expo-constants';
import styled from 'styled-components/native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${hp('3%')}px;
  padding: ${wp('5%')}px;
  padding-top: ${Constants.statusBarHeight - 15}px;
  padding-bottom: 0;
`;

export const LeftIcon = styled.TouchableOpacity``;
export const SwitchTheme = styled.TouchableOpacity``;

export const ContentFood = styled.View`
  flex: 1;
`;

export const SloganContainer = styled.View`
  flex-direction: column;
  padding-left: ${wp('5%')}px;
`;

export const Slogan = styled.Text`
  font-size: ${hp('3%')}px;
  font-weight: bold;
`;
export const SubSlogan = styled.Text`
  font-size: ${hp('2.5%')}px;
`;

export const CategoryContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: wp('5%'),
  },
})`
  margin-top: ${hp('3%')}px;
  height: ${hp('3%')}px;
  max-height: ${hp('8%')}px;
`;

export const CategoryItem = styled.TouchableOpacity`
  width: ${wp('16%')}px;
  height: ${hp('8%')}px;
  border-radius: 50px;
  margin-right: ${wp('2%')}px;
  box-shadow: 0 1px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CategoryImage = styled.Image`
  width: ${wp('10%')}px;
  height: ${hp('6%')}px;
  align-self: center;
`;

export const FoodContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: hp('5%'),
  },
})`
  flex: 1;
  margin-top: ${hp('2%')}px;
  padding-right: ${wp('5%')}px;
`;

export const FoodContentContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${hp('6%')}px;
`;

export const FoodItem = styled.View`
  flex: 1;
  height: ${hp('20%')}px;
  margin-left: ${wp('5%')}px;
  border-radius: 16px;
  justify-content: space-between;
`;

export const FoodImage = styled.Image`
  width: ${wp('35%')}px;
  height: ${hp('20%')}px;
  margin-top: ${-hp('9.5%')}px;
`;

export const FoodDescriptionContainer = styled.View`
  margin-top: ${-hp('10%')}px;
  padding: 0 0 5px 10px;
`;

export const FoodTitle = styled.Text`
  font-weight: bold;
  font-size: ${hp('2.5%')}px;
`;
export const FoodSlogan = styled.Text`
  font-size: ${hp('2%')}px;
`;

export const PriceContainer = styled.View`
  margin-top: ${hp('1.5%')}px;
  flex-direction: row;
  justify-content: space-between;
  padding-right: ${wp('4%')}px;
  align-items: center;
`;

export const PriceText = styled.Text`
  font-weight: bold;
  font-size: ${hp('3%')}px;
`;
