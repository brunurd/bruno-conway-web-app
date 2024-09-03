import { useContext, useEffect, useMemo } from 'react';
import { Center, Spacing } from '../../ui/components';
import { BoardContext } from '../../contexts/BoardContext';
import { CellSpawner } from '../CellSpawner';
import { BoardContainer } from './Board.styles';

const Board = () => {
  const {
    data: {
      rows,
      cols,
      cellSize,
      maxCellSize,
      minCellSize,
    },
    updateCellSize,
  } = useContext(BoardContext);

  useEffect(() => {
    const resizeBoard = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let size = maxCellSize;

      if ((rows * maxCellSize) > windowWidth) {
        size = Math.floor(Math.min(size, windowWidth / rows));
      }

      if ((cols * maxCellSize) > windowHeight) {
        size = Math.floor(Math.min(size, windowHeight / cols));
      }

      updateCellSize(size <= minCellSize ? minCellSize : size);
    };

    resizeBoard();
    window.addEventListener('resize', resizeBoard);

    return () => {
      window.removeEventListener('resize', resizeBoard);
    };
  }, [rows, cols, cellSize]);

  const width = useMemo(() => rows * cellSize, [rows, cellSize]);
  const height = useMemo(() => cols * cellSize, [cols, cellSize]);

  return (
    <Center>
      <Spacing margin="20px 0 0">
        <Center>
          <BoardContainer
            $width={width}
            $height={height}
          >
            <CellSpawner />
          </BoardContainer>
        </Center>
      </Spacing>
    </Center>
  );
};

export { Board };
