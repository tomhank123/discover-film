import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'utils/theme';
import { useDarkMode } from 'hooks';

export const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useDarkMode();
  const theme = darkMode ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
