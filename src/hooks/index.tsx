import React from 'react';
import { ThemeProvider } from './Theme';

const AppContainer: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppContainer;
