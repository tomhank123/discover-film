const baseTheme = {
  bp: {
    xs: 'min-width: 0',
    sm: 'min-width: 576px',
    md: 'min-width: 768px',
    lg: 'min-width: 992px',
    xl: 'min-width: 1200px',
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontMono: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: '.25rem',
    borderRadiusSm: '.2rem',
    borderRadiusLg: '.3rem',
    borderRadiusPill: '50rem',
  },
  transitions: {
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    duration: '0.25s',
  },
};

export const lightTheme = {
  ...baseTheme,
  name: 'light',
  pallete: {
    common: {
      white: '#ffffff',
      gray: '#ededeb',
      black: '#000000',
    },
    primary: {
      main: '#141414',
      dark: '',
      light: '',
      lightest: '',
      shadow: '',
    },
    secondary: {
      main: '#e5e5e5',
      light: '',
      lightest: '',
    },
    red: {
      main: '#db0404',
      tint: '#830908',
    },
  },
};

export const darkTheme = {
  ...baseTheme,
  name: 'dark',
  pallete: {
    common: {
      white: '#ffffff',
      gray: '#ededeb',
      black: '#000000',
    },
    primary: {
      main: '#141414',
      dark: '',
      light: '',
      lightest: '',
      shadow: '',
    },
    secondary: {
      main: '#e5e5e5',
      light: '',
      lightest: '',
    },
    red: {
      main: '#db0404',
      tint: '#830908',
    },
  },
};
