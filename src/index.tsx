import React from 'react';

import { StatusBar } from 'react-native';

import Home from './pages/Home';
import { useTheme } from './hooks/Theme';

const App: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={currentTheme.colors.background}
        barStyle={
          currentTheme.title === 'dark' ? 'light-content' : 'dark-content'
        }
      />
      <Home />
    </>
  );
};

export default App;
