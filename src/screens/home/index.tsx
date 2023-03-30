import React from 'react';
import {ScrollView} from 'react-native';
import {Climate} from '../../components/Climate';
import {ClimateByDay} from '../../components/ClimateByDay';
import {ClimateByHour} from '../../components/ClimateByHour';
import {Header} from '../../components/Header';
import {Temperature} from '../../components/Temperature';
import useGetLocation from '../../hooks/useGetLocation';
import {Container} from './styles';
export function HomeScrren() {
  const {latitude, longitude, city} = useGetLocation();

  return (
    <Container>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Temperature />
        <Climate />

        <ClimateByHour />

        <ClimateByDay />
      </ScrollView>
    </Container>
  );
}
