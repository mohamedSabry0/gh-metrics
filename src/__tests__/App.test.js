import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App header', () => {
  render(<App />);
  screen.debug();
  const headerElement = screen.getByText(/Github Metrics/i);
  expect(headerElement).toBeInTheDocument();
});
