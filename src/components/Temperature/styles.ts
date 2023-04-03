import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const Icon = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.ultraLargeFont}px;
  font-weight: ${({theme}) => theme.fontWeights.bold};
  color: ${({theme}) => theme.colors.text};
`;

export const SubTitle = styled.Text`
  font-size: ${({theme}) => theme.fontSizes.largeFont}px;
  color: ${({theme}) => theme.colors.text};
`;
