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
  const { selectCell, data: { running } } = useContext(BoardContext);

  return <CellStyle
    $cellSize={cellSize}
    $isAlive={isAlive}
    $disabled={running}
    onClick={() => selectCell(x, y)}
  />;
};

export { Cell };
