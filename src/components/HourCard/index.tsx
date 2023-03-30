import React from 'react';
import {Container, Icon, Value} from './styles';

export function HourCard() {
  return (
    <Container>
      <Value>18º</Value>
      <Icon source={{uri: 'https://openweathermap.org/img/wn/02d@2x.png'}} />
      <Value>15:00</Value>
    </Container>
  );
}
