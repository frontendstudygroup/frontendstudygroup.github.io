import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Link } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SingleResource from '../SingleResource/SingleResource';
import Resources from "./Resources";
import Toggle from "../Toggle";

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
test("link working", () => {
    const history = createMemoryHistory();
    history.push = jest.fn();

    const { getByText } = render(
        <MemoryRouter history={history}>
          <Link to={`/resources/${resource.id}`}>More info</Link>
        </MemoryRouter>
      );

      fireEvent.click(getByText('More info'));
      expect(history.push).toHaveBeenCalledWith(`/resources/${resource.id}`);
});