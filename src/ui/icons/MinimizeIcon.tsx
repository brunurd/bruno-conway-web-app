import { HTMLAttributes } from 'react';

const MinimizeIcon = ({
  width = 25,
  height = 25,
  ...rest
}: {
  width?: number,
  height?: number,
} & HTMLAttributes<HTMLImageElement>) => {
  return <img
    width={width}
    height={height}
    src="images/minimize-icon.svg"
    alt="A icon representing minimizing a window or element"
    {...rest}
  />;
};

export { MinimizeIcon };
