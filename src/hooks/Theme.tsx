import React from 'react';

export interface ITheme {
  currentTheme: DefaultTheme;
  handleChangeTheme: () => void;
}

interface DefaultTheme {
  title: 'dark' | 'light';
  colors: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
  };
}

const dark: DefaultTheme = {
  title: 'dark',
  colors: {
    primary: '#fff',
    secondary: '#ccc',
    text: '#666',
    background: '#000',
  },
};

const light: DefaultTheme = {
  title: 'light',
  colors: {
    primary: '#000',
    secondary: '#04030F',
    text: '#666',
    background: '#fff',
  },
};

const ThemeContext = React.createContext<ITheme>({} as ITheme);

export const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState<DefaultTheme>(dark);

  const handleChangeTheme = React.useCallback(() => {
    setCurrentTheme(currentTheme.title === 'light' ? dark : light);
  }, [currentTheme]);

  const value = React.useMemo(() => ({ currentTheme, handleChangeTheme }), [
    currentTheme,
    handleChangeTheme,
  ]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = React.useContext(ThemeContext);

  return theme;
};
