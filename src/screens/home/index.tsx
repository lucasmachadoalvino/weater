import React from 'react';
import {ScrollView} from 'react-native';
import {Climate} from '../../components/Climate';
import {Header} from '../../components/Header';
import {Temperature} from '../../components/Temperature';
import {useGetCurrentWeather} from '../../hooks/useGetCurrentWeather';
import useGetLocation from '../../hooks/useGetLocation';
import {Container} from './styles';
export function HomeScrren() {
  const {latitude, longitude} = useGetLocation();

  const {
    data: currentWeather,
    refetch,
    isLoading,
  } = useGetCurrentWeather(latitude, longitude);

  return (
    <Container>
      <Header
        city={currentWeather?.name}
        onReloadPress={refetch}
        isLoading={isLoading}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Temperature
          temp={currentWeather?.main?.temp}
          description={currentWeather?.weather[0].description}
          icon={currentWeather?.weather[0].icon}
          max={currentWeather?.main?.temp_max}
          min={currentWeather?.main?.temp_min}
          isLoading={isLoading}
        />
        <Climate
          cloud={currentWeather?.clouds.all}
          humidity={currentWeather?.main.humidity}
          windSpeed={currentWeather?.wind.speed}
          isLoading={isLoading}
        />
      </ScrollView>
    </Container>
  );
}
