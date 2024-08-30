import { useContext, useEffect, useMemo } from 'react';
import { Center, Spacing } from '../../ui/components';
import { BoardContext } from '../../contexts/BoardContext';
import * as config from '../../data/board.config.json';
import { CellSpawner } from '../CellSpawner';
import { BoardContainer } from './Board.styles';

const Board = () => {
  const { data: { rows, cols, cellSize }, updateCellSize } = useContext(BoardContext);

  useEffect(() => {
    const resizeBoard = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      let size = cellSize;

      if ((rows * cellSize) > windowWidth) {
        size = Math.floor(Math.min(size, windowWidth / rows));
      }

      if ((cols * cellSize) > windowHeight) {
        size = Math.floor(Math.min(size, windowHeight / cols));
      }

      updateCellSize(size <= config.minCellSize ? config.minCellSize : size);
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
          <BoardContainer $width={width} $height={height}>
            <CellSpawner />
          </BoardContainer>
        </Center>
      </Spacing>
    </Center>
  );
};

export { Board };
