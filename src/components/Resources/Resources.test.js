import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Link } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SingleResource from '../SingleResource/SingleResource';
import Resources from "./Resources";
import Toggle from "../Toggle";
import axios from "axios";

// test.afterEach(cleanup)

describe("Resources Component", () => {
    it('rendered toggle', () => {
        const { getByTestId } = render(<Toggle />);
        const toggle = getByTestId("toggle");
        expect(toggle).toBeTruthy();
    });
})

test("resource name", () => {
    render(<div data-testid="name" />);
    const resourceName = screen.getByTestId("name");
    expect(resourceName).toBeInTheDocument();
});
// screen.debug();

test("resource body", () => {
    render(<div data-testid="body" />);
    const resourceBody = screen.getByTestId("body");
    expect(resourceBody).toBeInTheDocument();
});
// test("link working", () => {
//     const history = createMemoryHistory();
//     history.push = jest.fn();


jest.mock('axios');

it('returns the first resource', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: 'My First Album'
      }
    ]
  });

  const resource = await SingleResource();
  expect(resource).toHaveBeenCalledTimes('/resources/1');
});

      
    // const { getByText } = render(
    //     <MemoryRouter history={history}>
    //       <Link to={`/resources/1`}>More info</Link>
    //     </MemoryRouter>
    //   );

    //   fireEvent.click(getByText('More info'));
    //   expect(history.push).toHaveBeenCalledWith(`resources/1`);
// });