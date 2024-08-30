interface BoardData {
  cellSize: number,
  rows: number,
  cols: number,
  cells: Array<Array<boolean>>,
}

enum BoardActions {
  updateCellSize = 'BOARD/UPDATE_CELL_SIZE',
  cellSwitch = 'BOARD/CELL_SWITCH',
}

const boardReducer = (
  state: BoardData,
  action: { type: BoardActions } & Record<string, any>,
) => {
  switch (action.type) {
    case BoardActions.updateCellSize:
      return { ...state, cellSize: action.cellSize };
    case BoardActions.cellSwitch:
      const { cells } = state;
      cells[action.x][action.y] = true;
      return { ...state, cells };
    default:
      return state;
  }
};

export type { BoardData };
export { boardReducer, BoardActions };
