import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title on Home page', () => {
  render(<App />);
  const titleElement = screen.getByText('Open Source Internships');
  expect(titleElement).toBeInTheDocument();
});