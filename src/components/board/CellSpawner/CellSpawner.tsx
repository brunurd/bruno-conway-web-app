import { useContext } from 'react';
import { BoardContext } from '../../../contexts/BoardContext';
import { Cell } from '../Cell';
import { RowStyle } from './CellSpawner.styles';

const CellSpawner = () => {
  const { data: { cells, cellSize } } = useContext(BoardContext);

  return (
    <>
      {cells.map(
        (row, x) => {
          return <RowStyle key={`row-${x}`}>
            {row.map(
              (isOn, y) => {
                return <Cell
                  key={`${x},${y}`}
                  cellSize={cellSize}
                  isOn={isOn}
                  x={x}
                  y={y}
                />;
              },
            )}
          </RowStyle>;
        })}
    </>
  );
};

export { CellSpawner };
