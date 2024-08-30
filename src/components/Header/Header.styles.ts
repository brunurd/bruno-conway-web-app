import { styled } from 'styled-components';
import { MinimizeIcon } from '../../ui/icons';

const FloatHeader = styled.header<{ $showing: boolean }>`
  position: fixed;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.whiteTransparent};
  border-radius: 8px;
  padding: ${({ $showing }) => $showing ? '20px 40px 30px' : '17px'};
  filter: drop-shadow(1px 3px 3px #6b6b6b22);
  width: calc(100% - 20px);
  max-width: ${({ $showing }) => $showing ? '500px' : '0'};
`;

const HideMenuIcon = styled(MinimizeIcon) <{ $showing: boolean }>`
  position: absolute;
  left: 5px;
  top: 5px;
  cursor: pointer;
  scale: ${({ $showing }) => $showing ? 1 : -1};
`;

export { FloatHeader, HideMenuIcon };
