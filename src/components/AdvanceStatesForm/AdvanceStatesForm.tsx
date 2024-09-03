import { FormEvent, useCallback, useContext, useState } from 'react';
import {
  Button,
  Column,
  HorizontalRuler,
  Spacing,
  TextField,
} from '../../ui/components';
import { BoardContext } from '../../contexts/BoardContext';
import { LeadText } from './AdvanceStatesForm.styles';

type FormInputData<T> = { value: T };

type AdvanceStatesFormData = {
  advanceStatesTimes?: FormInputData<number>,
}

type AdvanceStatesFormErrors = {
  advanceStatesTimes?: string | null,
}

type AdvanceStatesFormEvent =
  FormEvent<HTMLFormElement> &
  { target: AdvanceStatesFormData };

const AdvanceStatesForm = () => {
  const { advanceStates, data: { running } } = useContext(BoardContext);
  const [errors, setErrors] = useState<AdvanceStatesFormErrors>({});

  const submitHandler = useCallback(
    (data: { advanceStatesTimes: number }) => {
      advanceStates(data.advanceStatesTimes);
    }, [advanceStates]);

  const validateFields = useCallback(
    (data: AdvanceStatesFormData) => {
      const validationErrors: AdvanceStatesFormErrors = {};

      // advanceStatesTimes validations.
      if (!data.advanceStatesTimes?.value) {
        validationErrors.advanceStatesTimes = 'The advanced states times is a required field.';
      }
      else if (!Number.isInteger(Number(data.advanceStatesTimes?.value))) {
        validationErrors.advanceStatesTimes = 'The advanced states times field should be a integer number.';
      }
      else if (Number.isNaN(Number(data.advanceStatesTimes?.value))) {
        validationErrors.advanceStatesTimes = 'The advanced states times field value is invalid.';
      } else {
        delete validationErrors.advanceStatesTimes;
      }

      setErrors(validationErrors);
      return validationErrors;
    }, []);

  const onSubmit = useCallback((event: AdvanceStatesFormEvent) => {
    event.preventDefault();

    if (Object.values(validateFields(event.target)).length > 0) return;

    submitHandler({
      advanceStatesTimes: Number(event.target.advanceStatesTimes?.value),
    });
  }, [errors]);

  return (
    <Spacing margin="20px 0 0">
      <HorizontalRuler />
      <LeadText>Run the simulation for a specific number of times:</LeadText>
      <form onSubmit={onSubmit}>
        <Column>
          <TextField
            data-testid="advance-state-input"
            disabled={running}
            name="advanceStatesTimes"
            type="number"
            step="1.0"
            placeholder="Number of times..."
            error={errors.advanceStatesTimes}
          />
          <Button
            data-testid="advance-state-button"
            disabled={running}
            type="submit"
            maxWidth="200px"
          >
            Advance States
          </Button>
        </Column>
      </form>
    </Spacing>
  );
};

export { AdvanceStatesForm };
