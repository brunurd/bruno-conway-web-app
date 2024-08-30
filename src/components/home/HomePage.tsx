import { BoardProvider } from '../../contexts/BoardContext';
import { Page } from '../../ui/components';
import { Board } from '../board';
import { Header } from './Header';

const HomePage = () => {
  return (
    <Page>
      <BoardProvider>
        <Board />
        <Header />
      </BoardProvider>
    </Page>
  );
};

export { HomePage };
