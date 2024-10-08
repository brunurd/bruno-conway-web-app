type CellsType = Array<Array<boolean>>;

interface BoardData {
  cellSize: number,
  rows: number,
  cols: number,
  maxCellSize: number,
  minCellSize: number,
  simulationMsInterval: number,
  running: boolean,
  cells: CellsType,
}

enum BoardActions {
  updateCellSize = 'BOARD/UPDATE_CELL_SIZE',
  toggleCell = 'BOARD/TOGGLE_CELL',
  runSimulation = 'BOARD/RUN_SIMULATION',
  stopSimulation = 'BOARD/STOP_SIMULATION',
  reset = 'BOARD/RESET',
  nextState = 'BOARD/NEXT_STATE',
  advanceStates = 'BOARD/ADVANCE_STATES',
}

const boardReducer = (
  state: BoardData,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: { type: BoardActions } & Record<string, any>,
) => {
  switch (action.type) {
    case BoardActions.updateCellSize:
      return { ...state, cellSize: action.cellSize };
    case BoardActions.toggleCell:
      if (state.running) return state;
      state.cells[action.x][action.y] = !state.cells[action.x][action.y];
      return { ...state };
    case BoardActions.runSimulation:
      return { ...state, running: true };
    case BoardActions.stopSimulation:
      return { ...state, running: false };
    case BoardActions.reset:
      return {
        ...state,
        running: false,
        cells: Array.from({ length: state.rows }, () =>
          Array.from({ length: state.cols }, () => false)),
      };
    case BoardActions.nextState:
      return { ...state, cells: nextState(state.cells) };
    case BoardActions.advanceStates:
      return { ...state, cells: advanceStates(action.times, state.cells) };
    default:
      return state;
  }
};

const nextState = (cells: CellsType): CellsType => {
  const nextStateCells = cells.map((row) => [...row]);
  return nextStateCells.map((row, x) => {
    return row.map((isAlive, y) => {

      // Check if cell is on edges.
      if (
        x < 1 || y < 1 ||
        x > cells[x].length - 2 || y > row.length - 2
      ) {
        return false;
      }

      // Check living neighbors count (considering the old state).
      const livingNeighbors = [
        cells[x - 1][y - 1],
        cells[x - 1][y],
        cells[x - 1][y + 1],
        cells[x][y - 1],
        cells[x][y + 1],
        cells[x + 1][y - 1],
        cells[x + 1][y],
        cells[x + 1][y + 1],
      ].filter(living => living).length;

      // Less logic possible to validate a living cell.
      if (isAlive && livingNeighbors == 2) return true;
      else if (livingNeighbors == 3) return true;
      else return false;

    });
  });
};

const advanceStates = (times: number, cells: CellsType) => {
  if (times === 0) return cells;
  return advanceStates(times - 1, nextState(cells));
};

export type { CellsType, BoardData };
export { boardReducer, BoardActions };
