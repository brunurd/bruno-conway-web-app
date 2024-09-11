import { ThemeProvider } from 'styled-components';
import { darken } from 'polished';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { BoardProvider } from '../../contexts/BoardContext';
import { Board } from '../Board';
import { theme } from '../../ui/theme';
import { BoardData } from '../../reducers/boardReducer';
import { AdvanceStatesForm } from './AdvanceStatesForm';

describe('<AdvanceStatesForm />', () => {
  const rows = 7;
  const cols = 7;
  let initialData: BoardData | undefined = undefined;

  const initiateAGlider = async () => {
    await userEvent.click(screen.getByTestId('cell-1-2'));
    await userEvent.click(screen.getByTestId('cell-2-3'));
    await userEvent.click(screen.getByTestId('cell-3-1'));
    await userEvent.click(screen.getByTestId('cell-3-2'));
    await userEvent.click(screen.getByTestId('cell-3-3'));
  };

  beforeEach(() => {
    initialData = {
      rows,
      cols,
      cellSize: 18,
      cells: Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => false)),
      running: false,
      maxCellSize: 18,
      minCellSize: 9,
      simulationMsInterval: 100,
    };
  });

  it('should advance 3 states when submit 3 in the advanceStatesTimes input', async () => {
    const App = () => (
      <ThemeProvider theme={theme}>
        <BoardProvider initialData={initialData}>
          <Board />
          <AdvanceStatesForm />
        </BoardProvider>
      </ThemeProvider>
    );

    await render(<App />);

    await act(async () => {
      await initiateAGlider();
      await userEvent.type(screen.getByTestId('advance-state-input'), '3');
      await userEvent.click(screen.getByTestId('advance-state-button'));
    });

    const fakeTimer = async () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 10000);
      });
    };

    await fakeTimer();

    // Check if glider is in the expected advanced state.
    const inactiveColor = darken(0.1, theme.colors.white);
    const activeColor = theme.colors.brightOrange;
    expect(screen.getByTestId('cell-1-2')).toHaveStyle(`background-color: ${inactiveColor}`);
    expect(screen.getByTestId('cell-2-2')).toHaveStyle(`background-color: ${activeColor}`);
    expect(screen.getByTestId('cell-2-3')).toHaveStyle(`background-color: ${inactiveColor}`);
    expect(screen.getByTestId('cell-3-1')).toHaveStyle(`background-color: ${inactiveColor}`);
    expect(screen.getByTestId('cell-3-2')).toHaveStyle(`background-color: ${inactiveColor}`);
    expect(screen.getByTestId('cell-3-3')).toHaveStyle(`background-color: ${activeColor}`);
    expect(screen.getByTestId('cell-3-4')).toHaveStyle(`background-color: ${activeColor}`);
    expect(screen.getByTestId('cell-4-2')).toHaveStyle(`background-color: ${activeColor}`);
    expect(screen.getByTestId('cell-4-3')).toHaveStyle(`background-color: ${activeColor}`);
  });
});
