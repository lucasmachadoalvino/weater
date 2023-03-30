/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import {HomeScrren} from './src/screens/home';

function App(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HomeScrren />
    </QueryClientProvider>
  );
}

export default App;
