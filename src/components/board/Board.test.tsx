import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../ui/theme';
import { Board } from './Board';
import { BoardProvider } from '../../contexts/BoardContext';
import { BoardData } from '../../reducers/boardReducer';

describe('<Board />', () => {
  test.each([
    {
      cellSize: 18,
      expectedCellSize: 18,
      minCellSize: 9,
      windowWidth: 3840,
      windowHeight: 2160,
    },
    {
      cellSize: 18,
      expectedCellSize: 12,
      minCellSize: 9,
      windowWidth: 800,
      windowHeight: 600,
    },
    {
      cellSize: 18,
      expectedCellSize: 9,
      minCellSize: 9,
      windowWidth: 375,
      windowHeight: 667,
    },
  ])('should update the cell size from $cellSize to $expectedCellSize when call the updateCellSize on window resize',
    async ({
      cellSize,
      expectedCellSize,
      minCellSize,
      windowWidth,
      windowHeight,
    }) => {
      const rows = 50;
      const cols = 50;

      const initialData: BoardData = {
        rows: rows,
        cols: cols,
        cellSize,
        cells: Array.from({ length: rows }, () =>
          Array.from({ length: cols }, () => false)),
        running: false,
        maxCellSize: cellSize,
        minCellSize,
        simulationMsInterval: 100,
      };

      const App = () => (
        <ThemeProvider theme={theme}>
          <BoardProvider initialData={initialData}>
            <Board />
          </BoardProvider>
        </ThemeProvider>
      );

      render(<App />);

      await act(() => {
        Object.assign(window, {
          innerWidth: windowWidth,
          innerHeight: windowHeight,
        }).dispatchEvent(new window.Event('resize'));
      });

      const firstCell = screen.getByTestId('cell-0-0');

      expect(firstCell).toHaveStyle(`width: ${expectedCellSize}px`);
      expect(firstCell).toHaveStyle(`height: ${expectedCellSize}px`);
    });
});
