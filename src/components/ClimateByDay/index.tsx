import React from 'react';
import {Container, Content, Title} from './styles';

import CalendarSvg from '../../assets/icons/calendar.svg';
import {DayCard} from '../DayCard';

const fakeData = ['', '', '', '', '', '', '', ''];

export function ClimateByDay() {
  return (
    <Container>
      <Content>
        <Title>Próximos dias</Title>
        <CalendarSvg width="20" height="20" />
      </Content>

      {fakeData.map(() => (
        <DayCard />
      ))}
    </Container>
  );
}
