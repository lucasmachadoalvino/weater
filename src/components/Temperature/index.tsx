import React from 'react';
import {Container, Icon, SubTitle, Title} from './styles';

export function Temperature() {
  return (
    <Container>
      <Icon source={{uri: 'https://openweathermap.org/img/wn/02d@2x.png'}} />

      <Title>28º</Title>
      <SubTitle>chuva moderada</SubTitle>
      <SubTitle> Max.: 34º Min.: 28º</SubTitle>
    </Container>
  );
}
