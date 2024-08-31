import { useContext, useState } from 'react';
import {
  Button,
  Title,
  Subtitle,
  Row,
  Spacing,
} from '../../ui/components';
import { BoardContext } from '../../contexts/BoardContext';
import {
  FloatHeader,
  HideMenuIcon,
} from './Header.styles';
import { AdvanceStatesForm } from '../AdvanceStatesForm';

const Header = () => {
  const {
    runSimulation,
    stopSimulation,
    reset,
    nextState,
    data: { running },
  } = useContext(BoardContext);
  const [showing, setShowing] = useState(true);

  return (
    <FloatHeader $showing={showing}>
      <HideMenuIcon
        $showing={showing}
        onClick={() => setShowing(!showing)}
      />
      {showing && (
        <>
          <Title>Bruno Araujo's </Title>
          <Subtitle>Conway's Game of Life</Subtitle>
          <Spacing margin="20px 0 0">
            <Row>
              <Button
                disabled={running}
                onClick={() => nextState()}
              >
                Next State
              </Button>
              {running ? (
                <Button
                  onClick={() => stopSimulation()}
                >
                  Stop Simulation
                </Button>
              ) : (
                <Button
                  disabled={running}
                  onClick={() => runSimulation()}
                >
                  Run Simulation
                </Button>
              )}
              <Button
                onClick={() => reset()}
              >
                Reset
              </Button>
            </Row>
          </Spacing>
          <AdvanceStatesForm />
        </>
      )}
    </FloatHeader>
  );
};

export { Header };
