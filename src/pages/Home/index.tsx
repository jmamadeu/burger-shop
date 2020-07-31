import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import {
  Container,
  Content,
  Header,
  LeftIcon,
  SwitchTheme,
  ContentFood,
  Slogan,
  SubSlogan,
  CategoryContainer,
  CategoryItem,
  CategoryImage,
} from './styles';
import { useTheme } from '../../hooks/Theme';

const Home: React.FC = () => {
  const { currentTheme, handleChangeTheme } = useTheme();

  return (
    <Container style={{ backgroundColor: currentTheme.colors.background }}>
      <Content>
        <Header>
          <LeftIcon>
            <MaterialCommunityIcons
              name='segment'
              size={30}
              color={currentTheme.colors.primary}
            />
          </LeftIcon>
          <SwitchTheme onPress={handleChangeTheme}>
            <MaterialCommunityIcons
              name='theme-light-dark'
              size={30}
              color={currentTheme.colors.primary}
            />
          </SwitchTheme>
        </Header>
        <ContentFood>
          <Slogan style={{ color: currentTheme.colors.primary }}>
            From Texas With
          </Slogan>
          <SubSlogan style={{ color: currentTheme.colors.text }}>
            American Love
          </SubSlogan>
          <CategoryContainer>
            <CategoryItem
              style={{ backgroundColor: currentTheme.colors.primary }}
            >
              <CategoryImage />
            </CategoryItem>

            <CategoryItem
              style={{ backgroundColor: currentTheme.colors.primary }}
            >
              <CategoryImage />
            </CategoryItem>

            <CategoryItem
              style={{ backgroundColor: currentTheme.colors.primary }}
            >
              <CategoryImage />
            </CategoryItem>

            <CategoryItem
              style={{ backgroundColor: currentTheme.colors.primary }}
            >
              <CategoryImage />
            </CategoryItem>

            <CategoryItem
              style={{ backgroundColor: currentTheme.colors.primary }}
            >
              <CategoryImage />
            </CategoryItem>

            <CategoryItem
              style={{ backgroundColor: currentTheme.colors.primary }}
            >
              <CategoryImage />
            </CategoryItem>

            <CategoryItem
              style={{ backgroundColor: currentTheme.colors.primary }}
            >
              <CategoryImage />
            </CategoryItem>

            <CategoryItem
              style={{ backgroundColor: currentTheme.colors.primary }}
            >
              <CategoryImage />
            </CategoryItem>

            <CategoryItem
              style={{ backgroundColor: currentTheme.colors.primary }}
            >
              <CategoryImage />
            </CategoryItem>

            <CategoryItem
              style={{ backgroundColor: currentTheme.colors.primary }}
            >
              <CategoryImage />
            </CategoryItem>

            <CategoryItem
              style={{ backgroundColor: currentTheme.colors.primary }}
            >
              <CategoryImage />
            </CategoryItem>
          </CategoryContainer>
        </ContentFood>
      </Content>
    </Container>
  );
};

export default Home;
