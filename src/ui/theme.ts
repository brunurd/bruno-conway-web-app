import { colors } from './tokens/colors';
import { fontFamilies } from './tokens/fontFamilies';
import { transitions } from './tokens/transitions';

const theme = {
  colors,
  fontFamilies,
  transitions,
} as const;

type Theme = typeof theme;

export type { Theme };
export { theme };
