import { useContext } from 'react';
import { BoardContext } from '../../contexts/BoardContext';
import { CellStyle } from './Cell.styles';

const Cell = ({
  cellSize,
  isAlive,
  x,
  y,
}: {
  cellSize: number,
  isAlive: boolean,
  x: number,
  y: number,
}) => {
  const { toggleCell, data: { running } } = useContext(BoardContext);

  return <CellStyle
    data-testid={`cell-${x}-${y}`}
    $cellSize={cellSize}
    $isAlive={isAlive}
    $disabled={running}
    onMouseDown={(e) => { e.preventDefault(); toggleCell(x, y); }}
  />;
};

export { Cell };
