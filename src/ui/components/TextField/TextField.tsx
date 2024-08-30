import { HTMLAttributes } from 'react';
import { Input, ErrorText } from './TextField.styles';
import { Column } from '../Column';

type TextFieldProps = {
  error?: string | null,
  disabled?: boolean,
  name: string,
  type?: string,
  step?: string,
  placeholder?: string,
} & HTMLAttributes<HTMLInputElement>;

const TextField = ({
  error,
  disabled = false,
  ...rest
}: TextFieldProps) => {
  return (
    <Column $gap="10px">
      <Input
        $error={error}
        $disabled={disabled}
        disabled={disabled}
        {...rest}
      />
      {error && (
        <ErrorText
          $disabled={disabled}
        >
          ⚠️ {error}
        </ErrorText>
      )}
    </Column>
  );
};

export { TextField };
