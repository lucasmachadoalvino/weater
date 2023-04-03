import React from 'react';
import {HomeScrren} from '..';
import {render} from '../../../test/customRender';
import {QueryClientWrapper} from '../../../test/utils';

function renderAccountScreen() {
  return render(
    <QueryClientWrapper>
      <HomeScrren />
    </QueryClientWrapper>,
  );
}

describe('HomeScrren', () => {
  describe('when the screen is rendered', () => {
    it('contains a header component', () => {
      const {getByTestId} = renderAccountScreen();
      const Header = getByTestId('Header');
      expect(Header).toBeTruthy();
    });

    it('contains a temperature component', () => {
      const {getByTestId} = renderAccountScreen();
      const Temperature = getByTestId('Temperature');
      expect(Temperature).toBeTruthy();
    });

    it('contains a climate component', () => {
      const {getByTestId} = renderAccountScreen();
      const Climate = getByTestId('Climate');
      expect(Climate).toBeTruthy();
    });
  });
});
