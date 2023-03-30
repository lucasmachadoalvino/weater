import React from 'react';
import {FlatList} from 'react-native';
import {HourCard} from '../HourCard';
import {Container, Content, Date, Title} from './styles';

const fakeData = ['', '', '', '', '', '', '', ''];

export function ClimateByHour() {
  return (
    <Container>
      <Content>
        <Title>Hoje</Title>
        <Date>29/03</Date>
      </Content>

      <FlatList
        data={fakeData}
        renderItem={() => <HourCard />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {/* <Content>
        <CloudSvg width="20" height="20" fill={'white'} />
        <Value>67%</Value>
      </Content>
      <Content>
        <WindSvg width="20" height="20" fill={'white'} />
        <Value>25 km/h</Value>
      </Content> */}
    </Container>
  );
}
