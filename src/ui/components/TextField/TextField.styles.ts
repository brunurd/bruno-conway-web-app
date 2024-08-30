import styled, { css } from 'styled-components';
import { lighten } from 'polished';

const Input = styled.input<{ $error?: string | null, $disabled: boolean }>`
  border-radius: 4px;
  padding: 0 15px;
  font-size: 1rem;
  font-weight: 400;
  display: block;
  min-height: 50px;
  border-width: 1px;
  border-style: solid;
  font-family: ${({ theme }) => theme.fontFamilies.roboto};
  background-color: ${({ theme }) => lighten(0.2, theme.colors.lightOrange)};

  ${({ theme, $disabled }) => {
    const { gray, lightOrange, torange } = theme.colors;

    return css`
      border-color: ${$disabled ? gray : lightOrange};
      color: ${$disabled ? gray : torange};
    `;
  }}
`;

const ErrorText = styled.p<{ $disabled: boolean }>`
  display: ${({ $disabled }) => $disabled ? 'none' : 'block'};
  font-family: ${({ theme }) => theme.fontFamilies.roboto};
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.error};
  margin: 0;
`;

export { Input, ErrorText };
