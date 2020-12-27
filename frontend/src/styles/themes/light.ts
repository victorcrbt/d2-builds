import { DefaultTheme } from 'styled-components';

import global from './global';

export default {
  ...global,

  name: 'light',

  colors: {
    primary: '#7711c8',
    darkPrimary: '#530C8D',
    lightPrimary: '#9322EC',

    secondary: '#24C762',
    darkSecondary: '#178240',
    lightSecondary: '#41DD7C',

    graphite: '#333333',
    black: '#1A1A1A',
    lightBlack: '#4D4D4D',

    gray: '#C4BDBD',
    darkGray: '#ABA1A1',
    lightGray: '#DBD7D7',

    red: '#f0353b',
    blue: '#357af0',
    green: '#1ddb69',
    yellow: '#dff538',
    orange: '#f5a442',
    pink: '#fff',
    purple: '#bc1aed',
    white: '#ffffff',
  },

  colorLevels: {
    success: '#1ddb69',
    danger: '#f0353b',
    info: '#357af0',
    warning: '#f5a442',
  },

  layoutColors: {
    background: '#333333',
    backgroundHighlight: '#1A1A1A',
    text: '#DBD7D7',
    textHighlight: '#ffffff',
  },
} as DefaultTheme;
