import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Supported by Women Who Code link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Supported by Women Who Code/i);
  expect(linkElement).toBeInTheDocument();
});
