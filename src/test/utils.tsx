import React, {ReactNode} from 'react';

import {QueryClient, QueryClientProvider} from 'react-query';

type WithChildren<T = Record<string, unknown>> = T & {
  children?: ReactNode;
};

export function QueryClientWrapper({children}: WithChildren) {
  const queryClient = new QueryClient({
    defaultOptions: {queries: {cacheTime: 0, retry: false}},
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
