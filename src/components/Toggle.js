import card from '../assets/images/card.svg';
import table from '../assets/images/table.svg';
import React from "react";
import { useHistory } from 'react-router-dom';
import './Toggle.css';


export default function Toggle(){
    const history = useHistory();
    return (
        <>
            <div>
                 <button className= "toggle" onClick={() => history.push('/TableView')}className="toggle"><img alt ="table" src={table}></img></button>

                 <button className= "toggle" onClick={() => history.push('/resources')}className="toggle"><img alt ="card" src={card}></img></button>
            </div>
        </>

    );

}