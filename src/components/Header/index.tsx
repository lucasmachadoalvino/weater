import React from 'react';
import {Container, Content, Title} from './styles';

import LocationSvg from '../../assets/icons/location.svg';
import ReloadSvg from '../../assets/icons/reload.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <LocationSvg width="20" height="20" fill={'white'} />
        <Title>Blumenau</Title>
      </Content>
      <ReloadSvg width="20" height="20" fill={'white'} />
    </Container>
  );
}
