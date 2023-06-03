import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/pages/Home';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

test('renders Home repos', () => {
  const initialState = {
    repos: [
      {
        id: 52166965,
        name: 'FreeCodeCamp',
        owner: 'Manish-Giri',
        stars: 53,
        forks: 41,
      },
      {
        id: 34298402,
        name: 'freecodecamp',
        owner: 'QuincyLarson',
        stars: 46,
        forks: 15,
      },
    ],
  };

  useSelector.mockReturnValue(initialState.repos);
  useDispatch.mockReturnValue(jest.fn());
  const { getAllByText } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  );
  expect(getAllByText(/Fork Count:/i)).toHaveLength(2);
});
