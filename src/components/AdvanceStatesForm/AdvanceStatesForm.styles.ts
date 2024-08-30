import styled from 'styled-components';

const LeadText = styled.p`
  font-family: ${({ theme }) => theme.fontFamilies.roboto};
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;

export { LeadText };
