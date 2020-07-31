import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
  padding-top: ${Constants.statusBarHeight + 15}px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const LeftIcon = styled.TouchableOpacity``;
export const SwitchTheme = styled.TouchableOpacity``;

export const ContentFood = styled.View`
  flex: 0.8;
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
})`
  margin-top: 25px;
`;

export const CategoryItem = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;
export const CategoryImage = styled.View``;
