import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
};

export default MyApp;
