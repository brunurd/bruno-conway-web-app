import styled from 'styled-components';

const Column = styled.div<{ $gap?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: left;
  gap: ${({ $gap }) => $gap ?? '20px'};
`;

export { Column };
