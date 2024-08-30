import {
  createContext,
  ReactNode,
  useMemo,
  useReducer,
} from 'react';
import * as config from '../data/board.config.json';
import {
  BoardActions,
  BoardData,
  boardReducer,
} from '../reducers/boardReducer';

interface BoardContextProps {
  data: BoardData,
  updateCellSize: (cellSize: number) => void,
  selectCell: (x: number, y: number) => void,
  runSimulation: () => void,
  reset: () => void,
  nextState: () => void,
}

const INITIAL_BOARD_DATA: BoardData = {
  cellSize: config.maxCellSize,
  rows: config.rows,
  cols: config.cols,
  cells: Array.from({ length: config.rows }, () =>
    Array.from({ length: config.cols }, () => false)),
  running: false,
};

const BoardContext = createContext<BoardContextProps>({
  data: INITIAL_BOARD_DATA,
  updateCellSize: () => null,
  selectCell: () => null,
  runSimulation: () => null,
  reset: () => null,
  nextState: () => null,
});

const BoardProvider = ({ children }: { children: ReactNode }) => {
  const [boardState, dispatch] = useReducer(boardReducer, INITIAL_BOARD_DATA);

  const boardContextValue = useMemo(() => {
    return {
      data: boardState,
      updateCellSize: (cellSize: number) => dispatch({
        type: BoardActions.updateCellSize,
        cellSize,
      }),
      selectCell: (x: number, y: number) => dispatch({
        type: BoardActions.selectCell,
        x,
        y,
      }),
      runSimulation: () => dispatch({ type: BoardActions.runSimulation }),
      reset: () => dispatch({ type: BoardActions.reset }),
      nextState: () => dispatch({ type: BoardActions.nextState }),
    };
  }, [boardState, dispatch]);

  return (
    <BoardContext.Provider value={boardContextValue}>
      {children}
    </BoardContext.Provider>
  );
};

export { BoardContext, BoardProvider };
