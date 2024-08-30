type CellsType = Array<Array<boolean>>;

interface BoardData {
  cellSize: number,
  rows: number,
  cols: number,
  cells: CellsType,
  running: boolean,
}

enum BoardActions {
  updateCellSize = 'BOARD/UPDATE_CELL_SIZE',
  selectCell = 'BOARD/SELECT_CELL',
  runSimulation = 'BOARD/RUN_SIMULATION',
  reset = 'BOARD/RESET',
  nextState = 'BOARD/NEXT_STATE',
}

const boardReducer = (
  state: BoardData,
  action: { type: BoardActions } & Record<string, any>,
) => {
  switch (action.type) {
    case BoardActions.updateCellSize:
      return { ...state, cellSize: action.cellSize };
    case BoardActions.selectCell:
      if (state.running) return state;
      state.cells[action.x][action.y] = true;
      return { ...state };
    case BoardActions.runSimulation:
      if (state.running) return state;
      return { ...state, running: true };
    case BoardActions.reset:
      return {
        ...state,
        running: false,
        cells: Array.from({ length: state.rows }, () =>
          Array.from({ length: state.cols }, () => false)),
      };
    case BoardActions.nextState:
      return { ...state, cells: nextState(state.cells) };
    default:
      return state;
  }
};

const nextState = (cells: CellsType): CellsType => {
  const nextStateCells = structuredClone(cells);
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

      if (isAlive && livingNeighbors == 2) return true;
      else if (livingNeighbors == 3) return true;
      else return false;
    });
  });
};

export type { CellsType, BoardData };
export { boardReducer, BoardActions };
