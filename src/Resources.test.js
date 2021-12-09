import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Router, Link } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import data from './components/data/data.json';
import Resources from './components/Resources/Resources';

describe('Resources', () => {

    test(" more info Link validation", async () => {
        //check the more info link 12 times rendered on /resouces page 
        //check when click moreinfo link routes to corresponding page /resources/resource.id 
        //check each page has resource.name by getByText on the screen

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

    });
    screen.debug();
});



