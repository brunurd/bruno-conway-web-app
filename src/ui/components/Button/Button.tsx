import { ReactNode } from 'react';
import { ButtonStyle } from './Button.styles';

interface ButtonProps {
  disabled?: boolean;
  children: ReactNode;
}

const Button = ({
  disabled = false,
  children,
}: ButtonProps) => {
  return <ButtonStyle disabled={disabled}>{children}</ButtonStyle>;
};

export { Button };
