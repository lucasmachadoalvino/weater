import MockAdapter from 'axios-mock-adapter';
import {api} from '../../api/apis';
import {weatherService} from '../weatherService';

import {CurrentWeather} from '../weatherService';

const weatherDefaultMock: CurrentWeather = {
  name: 'fake name',
  main: {
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
  },
  weather: [],
  clouds: {
    all: 0,
  },
  wind: {
    speed: 0,
  },
};

describe('weatherService', () => {
  describe('getCurrentWeather', () => {
    it('should return the current weather', async () => {
      const apiBffMock = new MockAdapter(api);
      const mountedUrl = new RegExp(`.*/weather.*`);
      const getMethod = () =>
        apiBffMock.onGet(mountedUrl).reply(200, weatherDefaultMock);

      getMethod();

      const response = await weatherService.getCurrentWeather(0, 0);
      expect(response).toEqual(weatherDefaultMock);
    });
  });
});
