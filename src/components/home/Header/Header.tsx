import { useContext } from 'react';
import {
  Button,
  Title,
  Subtitle,
  Row,
  Spacing,
} from '../../../ui/components';
import {
  FloatHeader,
} from './Header.styles';
import { BoardContext } from '../../../contexts/BoardContext';

const Header = () => {
  const {
    runSimulation,
    reset,
    data: { running },
  } = useContext(BoardContext);

  return (
    <FloatHeader>
      <Title>Bruno Araujo's </Title>
      <Subtitle>Conway's Game of Life</Subtitle>
      <Spacing margin="20px 0 0">
        <Row>
          <Button
            disabled={running}
            onClick={() => runSimulation()}
          >
            Run Simulation
          </Button>
          <Button
            onClick={() => reset()}
          >
            Reset
          </Button>
        </Row>
      </Spacing>
    </FloatHeader>
  );
};

export { Header };
