import { BoardProvider } from '../contexts/BoardContext';
import { Page } from '../ui/components';
import { Board } from '../components/Board';
import { Header } from '../components/Header';

const HomePage = () => {
  useEffect(() => {
    const requestBoardData = () => { };
  }, []);

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
