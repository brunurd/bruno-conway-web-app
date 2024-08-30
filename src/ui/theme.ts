import { colors } from './tokens/colors';
import { fontFamilies } from './tokens/fontFamilies';

const theme = {
  colors,
  fontFamilies,
} as const;

type Theme = typeof theme;

export type { Theme };
export { theme };
