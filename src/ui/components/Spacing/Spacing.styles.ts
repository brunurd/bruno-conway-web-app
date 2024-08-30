import { styled } from 'styled-components';

const SpacingStyle = styled.div<{ $margin: string, $padding: string, $wide: boolean }>`
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  width: ${({ $wide }) => $wide ? '100%' : 'auto'};
`;

export { SpacingStyle };
