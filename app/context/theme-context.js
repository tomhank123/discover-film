import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { SkeletonTheme } from 'react-loading-skeleton';
import { lightTheme, darkTheme } from 'utils/theme';
import { useDarkMode } from 'hooks';

export const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useDarkMode();
  const theme = darkMode ? darkTheme : lightTheme;
  const makeStyles = {
    highlightColor: darkMode ? '#212529' : '#d2d2d2',
    color: darkMode ? '#141414' : '#f8f9fa',
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>
        <SkeletonTheme
          color={makeStyles.color}
          highlightColor={makeStyles.highlightColor}
        >
          {children}
        </SkeletonTheme>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
