import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { darken } from 'polished';
import { ThemeProvider } from 'styled-components';
import { BoardProvider } from '../../contexts/BoardContext';
import { theme } from '../../ui/theme';
import { BoardData } from '../../reducers/boardReducer';
import { Board } from '../Board';
import { Header } from './Header';

describe('<Header />', () => {
  const rows = 7;
  const cols = 7;
  let initialData: BoardData | null = null;

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

  it('should update the next state in the board when the next state button is pressed', async () => {
    const App = () => (
      <ThemeProvider theme={theme}>
        <BoardProvider initialData={initialData as BoardData}>
          <Board />
          <Header />
        </BoardProvider>
      </ThemeProvider>
    );

    render(<App />);

    await act(async () => {
      await initiateAGlider();
      await userEvent.click(screen.getByTestId('next-state-button'));
    });

    // Check if glider is in the expected next state.
    const inactiveColor = darken(0.1, theme.colors.white);
    const activeColor = theme.colors.brightOrange;
    expect(screen.getByTestId('cell-1-2')).toHaveStyle(`background-color: ${inactiveColor}`);
    expect(screen.getByTestId('cell-2-1')).toHaveStyle(`background-color: ${activeColor}`);
    expect(screen.getByTestId('cell-2-3')).toHaveStyle(`background-color: ${activeColor}`);
    expect(screen.getByTestId('cell-3-1')).toHaveStyle(`background-color: ${inactiveColor}`);
    expect(screen.getByTestId('cell-3-2')).toHaveStyle(`background-color: ${activeColor}`);
    expect(screen.getByTestId('cell-3-3')).toHaveStyle(`background-color: ${activeColor}`);
    expect(screen.getByTestId('cell-4-2')).toHaveStyle(`background-color: ${activeColor}`);
  });
});
