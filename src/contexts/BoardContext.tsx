import {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import {
  BoardActions,
  BoardData,
  boardReducer,
} from '../reducers/boardReducer';

interface BoardContextProps {
  data: BoardData | null,
  updateCellSize: (cellSize: number) => void,
  toggleCell: (x: number, y: number) => void,
  runSimulation: () => void,
  stopSimulation: () => void,
  reset: () => void,
  nextState: () => void,
  advanceStates: (times: number) => void,
}

const BoardContext = createContext<BoardContextProps>({
  data: null,
  updateCellSize: () => null,
  toggleCell: () => null,
  runSimulation: () => null,
  stopSimulation: () => null,
  reset: () => null,
  nextState: () => null,
  advanceStates: () => null,
});

const BoardProvider = ({
  children,
  initialData,
}: {
  children: ReactNode,
  initialData: BoardData,
}) => {
  const [boardState, dispatch] = useReducer(boardReducer, initialData);

  // Looping of the simulation.
  useEffect(() => {
    if (!boardState.running) return;

    setTimeout(() => {
      dispatch({ type: BoardActions.nextState });
    }, boardState.simulationMsInterval);

  }, [boardState.running, boardState.cells]);

  const boardContextValue = useMemo(() => {
    return {
      data: boardState,
      updateCellSize: (cellSize: number) => dispatch({
        type: BoardActions.updateCellSize,
        cellSize,
      }),
      toggleCell: (x: number, y: number) => dispatch({
        type: BoardActions.toggleCell,
        x,
        y,
      }),
      runSimulation: () => dispatch({ type: BoardActions.runSimulation }),
      stopSimulation: () => dispatch({ type: BoardActions.stopSimulation }),
      reset: () => dispatch({ type: BoardActions.reset }),
      nextState: () => dispatch({ type: BoardActions.nextState }),
      advanceStates: (times: number) => dispatch({
        type: BoardActions.advanceStates,
        times,
      }),
    };
  }, [boardState, dispatch]);

  return (
    <BoardContext.Provider value={boardContextValue}>
      {children}
    </BoardContext.Provider>
  );
};

export { BoardContext, BoardProvider };
