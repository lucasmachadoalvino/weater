import React from 'react';
import {Header} from '..';
import {fireEvent, render} from '../../../test/customRender';

import {HeaderProps} from '..';

const defaultMock: HeaderProps = {
  onReloadPress: jest.fn(),
  city: 'fake city',
  isLoading: false,
};

function renderHeader() {
  return render(<Header {...defaultMock} />);
}

describe('Header', () => {
  describe('the component is rendered', () => {
    it('contains a location icon component', () => {
      const {getByTestId} = renderHeader();
      const Icon = getByTestId('LocationSvg');

      expect(Icon).toBeTruthy();
    });

    it('contains a city name component', () => {
      const {getByText} = renderHeader();
      const City = getByText(defaultMock.city!);

      expect(City).toBeTruthy();
    });

    it('contains a reload icon component', () => {
      const {getByTestId} = renderHeader();
      const Icon = getByTestId('ReloadSvg');

      expect(Icon).toBeTruthy();
    });

    it('not contains a load component', () => {
      const {queryByTestId} = renderHeader();
      const Load = queryByTestId('HeaderLoad');

      expect(Load).toBeNull();
    });
  });

  describe('when the user touches reload icon', () => {
    it('the onReloadPress will be called', async () => {
      const {getByTestId} = renderHeader();

      const modalBottomElement = getByTestId('ReloadSvg');

      fireEvent.press(modalBottomElement);

      expect(defaultMock.onReloadPress).toHaveBeenCalled();
    });
  });
});
