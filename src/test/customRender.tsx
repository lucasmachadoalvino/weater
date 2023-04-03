import type {PropsWithChildren, ReactElement} from 'react';
import React from 'react';

import {render} from '@testing-library/react-native';
import {ThemeProvider} from 'styled-components/native';
import theme from '../global/theme';

function Providers({children}: PropsWithChildren<any>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

function customRender(ui: ReactElement, options = {theme: String}) {
  return render(ui, {wrapper: Providers, ...options});
}

export * from '@testing-library/react-native';
export {customRender as render};
