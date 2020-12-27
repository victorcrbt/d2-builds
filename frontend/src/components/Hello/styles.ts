import styled from 'styled-components';

export const Title = styled.h1`
  padding: ${props => props.theme.spacings.extraLarge};

  background: ${props => props.theme.layoutColors.background};
  color: ${props => props.theme.colors.pink};

  font-size: ${props => props.theme.fontSizes.extraLarge};
`;
