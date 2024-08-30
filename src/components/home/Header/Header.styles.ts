import { styled } from 'styled-components';

const FloatHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 10px 0 0 10px;
  background-color: ${({ theme }) => theme.colors.whiteTransparent};
  border-radius: 8px;
  padding: 20px 40px 30px;
  filter: drop-shadow(1px 3px 3px #6b6b6b22);
`;

export { FloatHeader };
