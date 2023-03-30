import React from 'react';
import {Container, Content, Value} from './styles';

import CloudSvg from '../../assets/icons/cloud.svg';
import RainSvg from '../../assets/icons/rain.svg';
import WindSvg from '../../assets/icons/wind.svg';

export function Climate() {
  return (
    <Container>
      <Content>
        <RainSvg width="20" height="20" fill={'white'} />
        <Value>18%</Value>
      </Content>
      <Content>
        <CloudSvg width="20" height="20" fill={'white'} />
        <Value>67%</Value>
      </Content>
      <Content>
        <WindSvg width="20" height="20" fill={'white'} />
        <Value>25 km/h</Value>
      </Content>
    </Container>
  );
}
