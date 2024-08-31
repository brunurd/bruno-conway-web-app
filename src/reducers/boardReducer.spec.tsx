import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createContext, Dispatch, ReactNode, useContext, useMemo, useReducer } from 'react';
import { BoardActions, BoardData, boardReducer } from './boardReducer';
import '@testing-library/jest-dom';

describe('boardReducer', () => {
  type ContextType = {
    data?: BoardData,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch?: Dispatch<{ type: BoardActions } & Record<string, any>>,
  };

  const Context = createContext<ContextType>({});

  const ReducerProvider = ({
    initialData,
    children,
  }: {
    initialData: BoardData,
    children: ReactNode,
  }) => {
    const [data, dispatch] = useReducer(boardReducer, initialData);

    const contextValue = useMemo(() => ({
      data,
      dispatch,
    }), [data, dispatch]);

    return <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>;
  };

  it('should update the cell size when call the updateCellSize action', async () => {
    const UpdateCellSizeElement = () => {
      const { data, dispatch } = useContext(Context);

      return (
        <>
          <p data-testid="cell-size">{data?.cellSize}</p>
          <button onClick={() => dispatch && dispatch({
            type: BoardActions.updateCellSize,
            cellSize: 20,
          })}>Click to update</button>
        </>
      );
    };

    const App = () => {
      return <ReducerProvider initialData={{
        cellSize: 10,
        rows: 50,
        cols: 50,
        cells: [],
        running: false,
      }}>
        <UpdateCellSizeElement />
      </ReducerProvider>;
    };

    render(<App />);

    expect(screen.getByTestId('cell-size')).toHaveTextContent('10');

    await userEvent.click(screen.getByText('Click to update'));

    expect(screen.getByTestId('cell-size')).toHaveTextContent('20');
  });
});
