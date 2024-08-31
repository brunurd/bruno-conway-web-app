import { css, styled } from 'styled-components';
import { darken, lighten } from 'polished';

const ButtonStyle = styled.button<{ disabled: boolean, $maxWidth: string }>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  ${({ theme, disabled, $maxWidth }) => css`
    background-color: ${disabled ? theme.colors.gray : theme.colors.torange};
    color: ${theme.colors.white};
    font-family: ${theme.fontFamilies.roboto};
    font-size: 1rem;
    font-weight: 700;
    cursor: ${disabled ? 'auto' : 'pointer'};
    max-width: ${$maxWidth};

    &:hover {
      background-color: ${disabled ? theme.colors.gray : lighten(0.1, theme.colors.torange)};
    }

    &:active, &:focus {
      background-color: ${disabled ? theme.colors.gray : darken(0.1, theme.colors.torange)};
    }
  `}
`;

export { ButtonStyle };
