import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  padding: 20px;
  padding-top: ${Constants.statusBarHeight - 5}px;
  padding-bottom: 0;
`;

export const LeftIcon = styled.TouchableOpacity``;
export const SwitchTheme = styled.TouchableOpacity``;

export const ContentFood = styled.View`
  flex: 1;
`;

export const SloganContainer = styled.View`
  flex-direction: column;
  padding-left: 20px;
`;

export const Slogan = styled.Text`
  font-size: 26px;
  font-weight: bold;
`;
export const SubSlogan = styled.Text`
  font-size: 20px;
`;

export const CategoryContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 20,
  },
})`
  margin-top: 20px;
  height: 70px;
  max-height: 70px;
`;

export const CategoryItem = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-right: 10px;
  box-shadow: 0 1px;
`;
export const CategoryImage = styled.Image`
  width: 45px;
  height: 45px;
  align-self: center;
  margin-top: 12px;
`;

export const FoodContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 30,
  },
})`
  flex: 1;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const FoodContentContainer = styled.View`
  flex-direction: row;
  margin-bottom: 40px;
`;
export const FoodItem = styled.View`
  flex: 1;
  height: 150px;
  margin-left: 10px;
  border-radius: 16px;
`;

export const FoodImage = styled.Image`
  width: 150px;
  height: 150px;
  margin-top: -60px;
`;

export const FoodDescriptionContainer = styled.View`
  margin-top: -15px;
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const FoodTitle = styled.Text`
  font-weight: bold;
  font-size: 19px;
`;
export const FoodSlogan = styled.Text`
  font-size: 12px;
`;

export const PriceContainer = styled.View`
  margin-top: 4px;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
  align-items: center;
`;

export const PriceText = styled.Text`
  font-weight: bold;
  font-size: 19px;
`;
