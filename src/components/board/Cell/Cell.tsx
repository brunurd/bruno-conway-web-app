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
  const { cellSwitch } = useContext(BoardContext);

  return <CellStyle
    $cellSize={cellSize}
    $isOn={isOn}
    onClick={() => cellSwitch(x, y)}
  />;
};

export { Cell };
