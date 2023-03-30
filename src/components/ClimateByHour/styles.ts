import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;
  margin: 0 16px;
  background-color: #8ecae6;
  border-radius: 20px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Value = styled.Text`
  font-weight: 500;
  font-size: 19px;
  margin-left: 8px;
  color: white;
`;

export const Title = styled.Text`
  font-size: 19px;
  font-weight: 500;
  color: white;
`;

export const Date = styled.Text`
  font-size: 19px;
  color: white;
`;
