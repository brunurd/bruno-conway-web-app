import { css, styled } from 'styled-components';
import { darken, lighten } from 'polished';

const CellStyle = styled.div<{
  $cellSize: number,
  $isAlive: boolean,
  $disabled: boolean,
}>`
  display: block;
  transition: background-color ${({ theme }) => `${theme.transitions.short.duration} ${theme.transitions.short.ease}`};
  cursor: ${({ $disabled }) => $disabled ? 'auto' : 'pointer'};
  width: ${({ $cellSize }) => `${$cellSize}px`};
  height: ${({ $cellSize }) => `${$cellSize}px`};
  box-sizing: border-box;

  ${({ $isAlive, theme }) => {
    const strokeColor = $isAlive ? darken(0.1, theme.colors.lightOrange) : theme.colors.lightOrange;
    const fillColor = $isAlive ? theme.colors.brightOrange : theme.colors.white;

    return css`
      border: 1px solid ${strokeColor};
      background-color: ${fillColor};

      &:hover {
        background-color: ${lighten(0.1, fillColor)};
      }

      &:active,&:focus {
        background-color: ${darken(0.1, fillColor)};
      }
    `;
  }}
`;

export { CellStyle };
