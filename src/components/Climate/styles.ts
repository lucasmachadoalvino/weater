import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: 16px;
  margin: 16px;
  background-color: #8ecae6;
  border-radius: 20px;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-weight: 500;
  font-size: 19px;
  margin-left: 8px;
  color: white;
`;
