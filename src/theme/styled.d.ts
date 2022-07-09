import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [x: string]: string;
    };
    space: number[];
    fonts: {
      [x: string]: string;
    };
    fontSizes: {
      [x: string]: string;
    };
    fontWeights: {
      [x: string]: number;
    };
    lineHeights: {
      [x: string]: number;
    };
    borders: {
      [x: string]: string;
    };
    radii: {
      [x: string]: string;
    };
    transition: string;
  }
}
