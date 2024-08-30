import { css, styled } from 'styled-components';
import { darken, lighten, opacify } from 'polished';

const ButtonStyle = styled.button<{ disabled: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  ${({ theme, disabled }) => css`
    background-color: ${disabled ? theme.colors.gray : theme.colors.torange};
    color: ${theme.colors.white};
    font-family: ${theme.fontFamilies.roboto};
    font-size: 1rem;
    cursor: ${disabled ? 'auto' : 'pointer'};

    &:hover {
      background-color: ${disabled ? theme.colors.gray : lighten(0.1, theme.colors.torange)};
    }

    &:active, &:focus {
      background-color: ${disabled ? theme.colors.gray : darken(0.1, theme.colors.torange)};
    }
  `}
`;

export { ButtonStyle };
