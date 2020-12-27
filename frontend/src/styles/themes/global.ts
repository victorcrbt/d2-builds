import { DefaultTheme } from 'styled-components';

export default {
  fontSizes: {
    extraSmall: '8px',
    small: '10px',
    mediumSmall: '12px',
    medium: '14px',
    mediumLarge: '18px',
    large: '24px',
    extraLarge: '36px',

    title: '36px',
    subtitle: '24px',
    paragraph: '14px',
  },

  spacings: {
    extraSmall: '4px',
    small: '8px',
    mediumSmall: '12px',
    medium: '16px',
    mediumLarge: '24px',
    large: '32px',
    extraLarge: '64px',
  },
} as Omit<DefaultTheme, 'colors' | 'colorLevels' | 'layoutColors'>;
