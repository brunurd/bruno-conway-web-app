import { ReactNode, MouseEvent } from 'react';
import { ButtonStyle } from './Button.styles';

interface ButtonProps {
  disabled?: boolean;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  disabled = false,
  children,
  onClick,
}: ButtonProps) => {
  return <ButtonStyle
    disabled={disabled}
    onClick={onClick}
  >{children}</ButtonStyle>;
};

export { Button };
