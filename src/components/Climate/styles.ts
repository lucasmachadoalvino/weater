import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: ${({theme}) => theme.spacing.mediumSpacing}px;
  margin: ${({theme}) => theme.spacing.mediumSpacing}px;
  background-color: ${({theme}) => theme.colors.blue};
  border-radius: ${({theme}) => theme.borderRadius.large}px;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.largeFont}px;
  margin-left: ${({theme}) => theme.spacing.smallSpacing}px;
  color: ${({theme}) => theme.colors.text};
`;
