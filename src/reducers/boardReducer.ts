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
  setCells = 'BOARD/SET_CELLS',
  stopSimulation = 'BOARD/STOP_SIMULATION',
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
    case BoardActions.setCells:
      return { ...state, cells: action.cells };
    case BoardActions.stopSimulation:
      return { ...state, running: false };
    default:
      return state;
  }
};

export type { CellsType, BoardData };
export { boardReducer, BoardActions };
