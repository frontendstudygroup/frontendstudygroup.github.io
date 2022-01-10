import { render, screen, fireEvent } from "@testing-library/react";
import Resources from "../Resources/Resources";
import Toggle from "../Toggle";
import { BrowserRouter, Router, Link } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import data from '../data/data.json';

describe("Resources", () => {
    
    test("renders Resources Component", () => {
        const {getByText} = render(<BrowserRouter><Resources/></BrowserRouter>);
        expect(screen.getByText("Open Source Programs")).toBeInTheDocument;
    })
   test('rendered toggle', () => {
        const { getByTestId } = render(<Toggle />);
        const toggle = getByTestId("toggle");
        expect(toggle).toBeTruthy();
    })
    test("resource name", () => {
        render(<div data-testid="name" />);
        const resourceName = screen.getByTestId("name");
        expect(resourceName).toBeInTheDocument();
    })
    test("resource body", () => {
        render(<div data-testid="body" />);
        const resourceBody = screen.getByTestId("body");
        expect(resourceBody).toBeInTheDocument();
    })
    test(" More info Link validation", async () => {
        //check the `More info` link 12 times rendered on /resouces page 
        //check when click moreinfo link routes to corresponding page /resources/resource.id 
        //check each page has resource.name using getByText on the screen
    
        let history = createMemoryHistory({ initialEntries: ["/resources"] });
    
        render(<BrowserRouter><Resources ResourcesList={data} /></BrowserRouter>);
        let moreinfoButtons = screen.getAllByText("More info");
        for (let resource of data) 
        {
            
            <Router history={history}>
                <Link to={{ pathname: `/resources/${resource.id}` }}>More info</Link>
            </Router>
    
            expect(moreinfoButtons).toHaveLength(12)
            
            fireEvent.click(moreinfoButtons[`${resource.id-1}`]);
    
            expect(location.pathname).toEqual(`/resources/${resource.id}`);
    
            await expect(screen.getByText(`${resource.name}`)).toBeInTheDocument();
    
        }   
    })
    screen.debug();
})
