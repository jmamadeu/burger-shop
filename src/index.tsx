import React from 'react';

import { StatusBar } from 'expo-status-bar';

import Home from './pages/Home';
import { useTheme } from './hooks/Theme';

const App: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={currentTheme.colors.background}
        style={currentTheme.title === 'light' ? 'dark' : 'light'}
      />
      <Home />
    </>
  );
};

export default App;
