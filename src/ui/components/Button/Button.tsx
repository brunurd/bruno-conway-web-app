import { ReactNode, ButtonHTMLAttributes } from 'react';
import { ButtonStyle } from './Button.styles';

type ButtonProps = {
  children: ReactNode;
  maxWidth?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  disabled = false,
  children,
  onClick,
  type = 'button',
  maxWidth = 'auto',
  ...rest
}: ButtonProps) => {
  return <ButtonStyle
    disabled={disabled}
    onClick={onClick}
    type={type}
    $maxWidth={maxWidth}
    {...rest}
  >{children}
  </ButtonStyle>;
};

export { Button };
