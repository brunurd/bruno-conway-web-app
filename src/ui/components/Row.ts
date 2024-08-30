import { styled } from 'styled-components';

const Row = styled.div<{ $gap?: number }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: ${({ $gap }) => `${$gap ?? 10}px`};
`;

export { Row };
