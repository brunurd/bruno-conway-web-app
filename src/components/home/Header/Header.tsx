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

const Header = () => {
  return (
    <FloatHeader>
      <Title>Bruno Araujo's </Title>
      <Subtitle>Conway's Game of Life</Subtitle>
      <Spacing margin="20px 0 0">
        <Row>
          <Button>Run Simulation</Button>
        </Row>
      </Spacing>
    </FloatHeader>
  );
};

export { Header };
