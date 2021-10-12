import card from '../assets/images/card.svg';
import table from '../assets/images/table.svg';
import React from "react";
import { useHistory } from 'react-router-dom';
import './Toggle.css';


export default function Toggle(){
    const history = useHistory();
    return (
        <div className="flex">
             <h1>Open Source Programs</h1>
            <div className="flex-container">
                    <button  onClick={() => history.push('/TableView')}><img alt ="table" src={table}></img></button>
                    <button  onClick={() => history.push('/resources')}><img alt ="card" src={card}></img></button>
                 
            </div>
           
        </div>

    );

}