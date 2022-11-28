import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from '../styles/Theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}
