import { ReactNode } from 'react';
import { SpacingStyle } from './Spacing.styles';

const Spacing = ({
  margin = 'auto',
  padding = 'auto',
  wide = true,
  children,
}: {
  margin?: string,
  padding?: string,
  children: ReactNode,
  wide?: boolean,
}) => {
  return <SpacingStyle
    $margin={margin}
    $padding={padding}
    $wide={wide}
  >
    {children}
  </SpacingStyle>;
};

export { Spacing };
