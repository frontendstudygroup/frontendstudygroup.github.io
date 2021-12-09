import { render, fireEvent ,screen } from '@testing-library/react';
import Homepage from './components/HomePage/HomePage';

 
describe('Homepage', () => {
  test('renders Homepage component', () => {
    const { getByText } = render(<Homepage />);
  
  expect(screen.getByText("Open Source Internships")).toBeInTheDocument();
  expect(screen.getByText("We are an organization to help you find open source internships")).toBeInTheDocument();
  expect(screen.getByText("What Open Source is ...")).toBeInTheDocument();
  expect(screen.getByText("a term that is referred to Open Source Software that is designed to be publicly accessible meaning that any user can see, modify, and distribute the code.")).toBeInTheDocument();
  expect(screen.getByText("We are here to help you!")).toBeInTheDocument();
});
  
  const Button = ({children}) => (
    <button>{children}</button>
  )
  test('renders button start', async () =>  {
    render(<Button>start</Button>)
    fireEvent.click(screen.getByText(/start/i))
  });
  screen.debug();
  
});