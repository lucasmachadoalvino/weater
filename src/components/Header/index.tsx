import React from 'react';
import {Button, Container, Content, Title} from './styles';

import {View} from 'react-native';
import LocationSvg from '../../assets/icons/location.svg';
import ReloadSvg from '../../assets/icons/reload.svg';
import {HeaderLoad} from './load';

export interface HeaderProps {
  city?: string;
  onReloadPress: () => void;
  isLoading: boolean;
}

export function Header({city, onReloadPress, isLoading}: HeaderProps) {
  if (isLoading) {
    return (
      <View testID="teste">
        <HeaderLoad />
      </View>
    );
  }

  return (
    <Container testID="Header">
      <Content>
        <LocationSvg
          width="20"
          height="20"
          fill={'white'}
          testID={'LocationSvg'}
        />
        <Title>{city}</Title>
      </Content>
      <Button onPress={onReloadPress}>
        <ReloadSvg width="20" height="20" fill={'white'} testID={'ReloadSvg'} />
      </Button>
    </Container>
  );
}
