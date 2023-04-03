import React from 'react';
import {Container, Content, Value} from './styles';

import CloudSvg from '../../assets/icons/cloud.svg';
import RainSvg from '../../assets/icons/rain.svg';
import WindSvg from '../../assets/icons/wind.svg';
import {ClimateLoad} from './load';

export interface ClimateProps {
  cloud?: number;
  humidity?: number;
  windSpeed?: number;
  isLoading: boolean;
}

export function Climate({humidity, windSpeed, cloud, isLoading}: ClimateProps) {
  if (isLoading) {
    return <ClimateLoad />;
  }
  return (
    <Container testID="Climate">
      <Content>
        <RainSvg width="20" height="20" fill={'white'} testID={'RainSvg'} />
        <Value>{humidity}%</Value>
      </Content>
      <Content>
        <CloudSvg width="20" height="20" fill={'white'} testID={'CloudSvg'} />
        <Value>{cloud}%</Value>
      </Content>
      <Content>
        <WindSvg width="20" height="20" fill={'white'} testID={'WindSvg'} />
        <Value>{windSpeed} km/h</Value>
      </Content>
    </Container>
  );
}
