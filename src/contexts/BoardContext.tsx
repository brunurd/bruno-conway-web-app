import {
  createContext,
  ReactNode,
  useMemo,
  useReducer,
} from 'react';
import * as config from '../data/board.config.json';
import { BoardActions, BoardData, boardReducer } from '../reducers/boardReducer';

interface BoardContextProps {
  data: BoardData,
  updateCellSize: (cellSize: number) => void,
  cellSwitch: (x: number, y: number) => void,
}

const INITIAL_BOARD_DATA: BoardData = {
  cellSize: config.maxCellSize,
  rows: config.rows,
  cols: config.cols,
  cells: Array.from({ length: config.rows }, () =>
    Array.from({ length: config.cols }, () => false)),
};

const BoardContext = createContext<BoardContextProps>({
  data: INITIAL_BOARD_DATA,
  updateCellSize: () => null,
  cellSwitch: () => null,
});

const BoardProvider = ({ children }: { children: ReactNode }) => {
  const [boardState, dispatch] = useReducer(boardReducer, INITIAL_BOARD_DATA);

  const authContextValue = useMemo(() => {
    return {
      data: boardState,
      updateCellSize: (cellSize: number) => dispatch({
        type: BoardActions.updateCellSize,
        cellSize,
      }),
      cellSwitch: (x: number, y: number) => dispatch({
        type: BoardActions.cellSwitch,
        x,
        y,
      }),
    };
  }, [boardState, dispatch]);

  return (
    <BoardContext.Provider value={authContextValue}>
      {children}
    </BoardContext.Provider>
  );
};

export { BoardContext, BoardProvider };
