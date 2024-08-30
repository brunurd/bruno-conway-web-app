import { BoardProvider } from '../contexts/BoardContext';
import { Page } from '../ui/components';
import { Board } from '../components/Board';
import { Header } from '../components/Header';

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
