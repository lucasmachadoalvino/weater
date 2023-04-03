/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/global/theme';

import {HomeScrren} from './src/screens/home';

function App(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <HomeScrren />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
