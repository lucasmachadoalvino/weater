import React from 'react';
import {Temperature} from '..';
import {render} from '../../../test/customRender';

import {TemperatureProps} from '..';

const defaultMock: TemperatureProps = {
  isLoading: false,
  temp: 22,
  description: 'fake description',
  icon: '10d',
  max: 25,
  min: 20,
};

function renderTemperature() {
  return render(<Temperature {...defaultMock} />);
}

describe('Temperature', () => {
  describe('the component is rendered', () => {
    it('contains a location icon component', () => {
      const {getByTestId} = renderTemperature();
      const Icon = getByTestId('TemperatureIcon');

      expect(Icon).toBeTruthy();
    });

    it('contains a title component', () => {
      const {getByText} = renderTemperature();
      const Title = getByText(`${defaultMock.temp?.toFixed(0)}º`);

      expect(Title).toBeTruthy();
    });

    it('contains a subTitle component', () => {
      const {getByText} = renderTemperature();
      const SubTitle = getByText(defaultMock.description!);

      expect(SubTitle).toBeTruthy();
    });

    it('contains a min and max component', () => {
      const {getByText} = renderTemperature();
      const MinAndMax = getByText(
        ` Mínima ${defaultMock.min?.toFixed(
          0,
        )}º Máxima ${defaultMock.max?.toFixed(0)}º`,
      );

      expect(MinAndMax).toBeTruthy();
    });
  });
});
