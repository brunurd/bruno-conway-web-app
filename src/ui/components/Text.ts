import { styled } from 'styled-components';

const Title = styled.h1<{ $textAlign?: string }>`
  margin: 0;
  width: 100%;
  text-align: ${({ $textAlign }) => $textAlign ?? 'left'};
  font-size: 2rem;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fontFamilies.newAmsterdam};
  color: ${({ theme }) => theme.colors.torange};
`;

const Subtitle = styled.h2`
  margin: 0;
  width: 100%;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fontFamilies.newAmsterdam};
  color: ${({ theme }) => theme.colors.torange};
`;

export { Title, Subtitle };
