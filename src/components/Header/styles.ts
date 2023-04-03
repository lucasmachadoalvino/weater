import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: ${({theme}) => theme.spacing.mediumSpacing}px;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: ${({theme}) => theme.fontWeights.bold};
  font-size: ${({theme}) => theme.fontSizes.largeFont}px;
  margin-left: ${({theme}) => theme.spacing.smallSpacing}px;
  color: ${({theme}) => theme.colors.text};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;
