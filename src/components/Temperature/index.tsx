import React from 'react';
import {TemperatureLoad} from './load';
import {Container, Icon, SubTitle, Title} from './styles';

export interface TemperatureProps {
  temp?: number;
  description?: string;
  icon?: string;
  max?: number;
  min?: number;
  isLoading: boolean;
}

export function Temperature({
  temp,
  description,
  icon,
  max,
  min,
  isLoading,
}: TemperatureProps) {
  if (isLoading) {
    return <TemperatureLoad />;
  }
  return (
    <Container testID="Temperature">
      <Icon
        source={{uri: `https://openweathermap.org/img/wn/${icon}@2x.png`}}
        testID={'TemperatureIcon'}
      />

      <Title>{temp?.toFixed(0)}º</Title>
      <SubTitle>{description}</SubTitle>
      <SubTitle>
        Mínima {min?.toFixed(0)}º Máxima {max?.toFixed(0)}º
      </SubTitle>
    </Container>
  );
}
