import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;

    colors: {
      primary: string;
      darkPrimary: string;
      lightPrimary: string;

      secondary: string;
      darkSecondary: string;
      lightSecondary: string;

      black: string;
      graphite: string;
      lightBlack: string;

      gray: string;
      darkGray: string;
      lightGray: string;

      red: string;
      green: string;
      blue: string;
      yellow: string;
      orange: string;
      purple: string;
      pink: string;
      white: string;
    };

    colorLevels: {
      success: string;
      danger: string;
      warning: string;
      info: string;
    };

    layoutColors: {
      background: string;
      backgroundHighlight: string;
      text: string;
      textHighlight: string;
    };

    spacings: {
      extraSmall: string;
      small: string;
      mediumSmall: string;
      medium: string;
      mediumLarge: string;
      large: string;
      extraLarge: string;
    };

    fontSizes: {
      extraSmall: string;
      small: string;
      mediumSmall: string;
      medium: string;
      mediumLarge: string;
      large: string;
      extraLarge: string;

      title: string;
      subtitle: string;
      paragraph: string;
    };
  }
}
