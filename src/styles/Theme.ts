import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#BC1413',
    white: '#fff',
    black: '#000',
    gray: '#292D32',
    lightGray: '#485059',
  },
};

export const GlobalStyles = createGlobalStyle<{ theme: typeof theme }>`
    body {
      font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
      transition: all 0.50s linear;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
  `;
