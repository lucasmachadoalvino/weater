import React from 'react';
import {Climate} from '..';
import {render} from '../../../test/customRender';

import {ClimateProps} from '..';

const defaultMock: ClimateProps = {
  cloud: 1,
  humidity: 2,
  windSpeed: 3,
  isLoading: false,
};

function renderClimate() {
  return render(<Climate {...defaultMock} />);
}

describe('Climate', () => {
  describe('the component is rendered', () => {
    it('contains a rain icon component', () => {
      const {getByTestId} = renderClimate();
      const Icon = getByTestId('RainSvg');

      expect(Icon).toBeTruthy();
    });

    it('contains a humidity value component', () => {
      const {getByText} = renderClimate();
      const Humidity = getByText(`${defaultMock.humidity!}%`);

      expect(Humidity).toBeTruthy();
    });

    it('contains a cloud icon component', () => {
      const {getByTestId} = renderClimate();
      const Icon = getByTestId('CloudSvg');

      expect(Icon).toBeTruthy();
    });

    it('contains a cloud value component', () => {
      const {getByText} = renderClimate();
      const cloud = getByText(`${defaultMock.cloud!}%`);

      expect(cloud).toBeTruthy();
    });

    it('contains a wind icon component', () => {
      const {getByTestId} = renderClimate();
      const Icon = getByTestId('WindSvg');

      expect(Icon).toBeTruthy();
    });

    it('contains a wind value component', () => {
      const {getByText} = renderClimate();
      const cloud = getByText(`${defaultMock.windSpeed!} km/h`);

      expect(cloud).toBeTruthy();
    });
  });
});
