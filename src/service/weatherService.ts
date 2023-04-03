import {api} from '../api/apis';

export interface CurrentWeather {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  clouds: {all: number};
  wind: {speed: number};
}

async function getCurrentWeather(
  lat: number,
  lon: number,
): Promise<CurrentWeather> {
  const result = await api.get(
    `weather?lat=${lat}&lon=${lon}&lang=pt_br&units=metric`,
  );
  return result.data;
}

export const weatherService = {
  getCurrentWeather,
};
