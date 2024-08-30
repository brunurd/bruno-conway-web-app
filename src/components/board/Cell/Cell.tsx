import { useContext } from 'react';
import { BoardContext } from '../../../contexts/BoardContext';
import { CellStyle } from './Cell.styles';

const Cell = ({
  cellSize,
  isOn,
  x,
  y,
}: {
  cellSize: number,
  isOn: boolean,
  x: number,
  y: number,
}) => {
  const { selectCell, data: { running } } = useContext(BoardContext);

  return <CellStyle
    $cellSize={cellSize}
    $isOn={isOn}
    $disabled={running}
    onClick={() => selectCell(x, y)}
  />;
};

export { Cell };
