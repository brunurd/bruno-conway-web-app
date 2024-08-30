import { styled } from 'styled-components';

const BoardContainer = styled.div<{ $width: number, $height: number }>`
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  background-color: ${({ theme }) => theme.colors.torange};
`;

export { BoardContainer };
