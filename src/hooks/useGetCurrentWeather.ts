import {useQuery, UseQueryResult} from 'react-query';
import {CurrentWeather, weatherService} from '../service/weatherService';

export function useGetCurrentWeather(
  lat: number,
  lon: number,
): UseQueryResult<CurrentWeather> {
  return useQuery(
    ['getDriverGeolocation'],
    () => weatherService.getCurrentWeather(lat, lon),
    {enabled: !!(lat && lon)},
  );
}
