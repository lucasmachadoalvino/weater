import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 20px;
  border: solid 1px #219ebc;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Value = styled.Text`
  font-size: 15px;
  color: white;
  /* margin-right: 8px; */
`;

export const MinValue = styled.Text`
  font-size: 15px;
  color: #219ebc;
  margin-left: 8px;
`;

export const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;

export const Content = styled.View`
  align-items: center;
  flex-direction: row;
`;
