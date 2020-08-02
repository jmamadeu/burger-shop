import React from 'react';

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import { useTheme } from '../../hooks/Theme';

import {
  Container,
  Header,
  LeftIcon,
  SwitchTheme,
  ContentFood,
  SloganContainer,
  Slogan,
  SubSlogan,
  CategoryContainer,
  CategoryItem,
  CategoryImage,
  FoodContainer,
  FoodContentContainer,
  FoodItem,
  FoodImage,
  FoodDescriptionContainer,
  FoodTitle,
  FoodSlogan,
  PriceContainer,
  PriceText,
} from './styles';
import { Text, View } from 'react-native';

const categoriesImage = [
  { source: require('../../assets/hamburguer.png') },
  { source: require('../../assets/pizza2.png') },
  { source: require('../../assets/fast-food.png') },
  { source: require('../../assets/hamburguer.png') },
  { source: require('../../assets/fast-food.png') },
  { source: require('../../assets/pizza2.png') },
];

const Home: React.FC = () => {
  const { currentTheme, handleChangeTheme } = useTheme();

  return (
    <Container style={{ backgroundColor: currentTheme.colors.background }}>
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
        <SloganContainer>
          <Slogan style={{ color: currentTheme.colors.primary }}>
            Ghost Burger Restaurant
          </Slogan>
          <SubSlogan style={{ color: currentTheme.colors.text }}>
            Hamburgers coloridos e gostosos!
          </SubSlogan>
        </SloganContainer>
        <CategoryContainer>
          {categoriesImage.map((category, id) => (
            <CategoryItem
              key={id}
              style={{
                backgroundColor:
                  currentTheme.title === 'light'
                    ? currentTheme.colors.backgroundSecondary
                    : currentTheme.colors.primary,
              }}
            >
              <CategoryImage source={category.source} />
            </CategoryItem>
          ))}
        </CategoryContainer>
        <FoodContainer>
          <FoodContentContainer>
            <FoodItem
              style={{
                backgroundColor:
                  currentTheme.title === 'dark'
                    ? currentTheme.colors.text
                    : currentTheme.colors.backgroundSecondary,
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <FoodImage
                  resizeMode='stretch'
                  source={require('../../assets/content/burger1.png')}
                />
              </View>
              <FoodDescriptionContainer>
                <FoodTitle style={{ color: currentTheme.colors.primary }}>
                  Beef Burger
                </FoodTitle>
                <FoodSlogan
                  style={{
                    color:
                      currentTheme.title === 'light'
                        ? currentTheme.colors.text
                        : currentTheme.colors.secondary,
                  }}
                >
                  Spicy with garlick
                </FoodSlogan>
                <PriceContainer>
                  <PriceText style={{ color: currentTheme.colors.primary }}>
                    1000 Kz
                  </PriceText>
                  <Feather
                    name='heart'
                    color={currentTheme.colors.primary}
                    size={24}
                  />
                </PriceContainer>
              </FoodDescriptionContainer>
            </FoodItem>
            <FoodItem
              style={{
                backgroundColor:
                  currentTheme.title === 'dark'
                    ? currentTheme.colors.text
                    : currentTheme.colors.backgroundSecondary,
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <FoodImage
                  resizeMode='stretch'
                  source={require('../../assets/content/burger1.png')}
                />
              </View>
              <FoodDescriptionContainer>
                <FoodTitle style={{ color: currentTheme.colors.primary }}>
                  Beef Burger
                </FoodTitle>
                <FoodSlogan
                  style={{
                    color:
                      currentTheme.title === 'light'
                        ? currentTheme.colors.text
                        : currentTheme.colors.secondary,
                  }}
                >
                  Spicy with garlick
                </FoodSlogan>
                <PriceContainer>
                  <PriceText style={{ color: currentTheme.colors.primary }}>
                    1000 Kz
                  </PriceText>
                  <Feather
                    name='heart'
                    color={currentTheme.colors.primary}
                    size={24}
                  />
                </PriceContainer>
              </FoodDescriptionContainer>
            </FoodItem>
          </FoodContentContainer>
          <FoodContentContainer>
            <FoodItem
              style={{
                backgroundColor:
                  currentTheme.title === 'dark'
                    ? currentTheme.colors.text
                    : currentTheme.colors.backgroundSecondary,
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <FoodImage
                  resizeMode='stretch'
                  source={require('../../assets/content/burger1.png')}
                />
              </View>
              <FoodDescriptionContainer>
                <FoodTitle style={{ color: currentTheme.colors.primary }}>
                  Beef Burger
                </FoodTitle>
                <FoodSlogan
                  style={{
                    color:
                      currentTheme.title === 'light'
                        ? currentTheme.colors.text
                        : currentTheme.colors.secondary,
                  }}
                >
                  Spicy with garlick
                </FoodSlogan>
                <PriceContainer>
                  <PriceText style={{ color: currentTheme.colors.primary }}>
                    1000 Kz
                  </PriceText>
                  <Feather
                    name='heart'
                    color={currentTheme.colors.primary}
                    size={24}
                  />
                </PriceContainer>
              </FoodDescriptionContainer>
            </FoodItem>

            <FoodItem
              style={{
                backgroundColor:
                  currentTheme.title === 'dark'
                    ? currentTheme.colors.text
                    : currentTheme.colors.backgroundSecondary,
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <FoodImage
                  resizeMode='stretch'
                  source={require('../../assets/content/burger1.png')}
                />
              </View>
              <FoodDescriptionContainer>
                <FoodTitle style={{ color: currentTheme.colors.primary }}>
                  Beef Burger
                </FoodTitle>
                <FoodSlogan
                  style={{
                    color:
                      currentTheme.title === 'light'
                        ? currentTheme.colors.text
                        : currentTheme.colors.secondary,
                  }}
                >
                  Spicy with garlick
                </FoodSlogan>
                <PriceContainer>
                  <PriceText style={{ color: currentTheme.colors.primary }}>
                    1000 Kz
                  </PriceText>
                  <Feather
                    name='heart'
                    color={currentTheme.colors.primary}
                    size={24}
                  />
                </PriceContainer>
              </FoodDescriptionContainer>
            </FoodItem>
          </FoodContentContainer>
        </FoodContainer>
      </ContentFood>
    </Container>
  );
};

export default Home;
