import { render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
import App from '../App';
import store from '../redux/store';

test('renders App header', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  const headerElement = screen.getByText(/GitHub Forked Repos/i);
  expect(headerElement).toBeInTheDocument();
});
