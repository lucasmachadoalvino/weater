import React from 'react';
import {Container, Content, Icon, MinValue, Value} from './styles';

export function DayCard() {
  return (
    <Container>
      <Value>Segunda-feira</Value>
      <Icon source={{uri: 'https://openweathermap.org/img/wn/02d@2x.png'}} />
      <Content>
        <Value>12ºc</Value>
        <MinValue>12ºc</MinValue>
      </Content>
    </Container>
  );
}
