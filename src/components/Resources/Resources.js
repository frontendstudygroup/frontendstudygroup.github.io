import React from 'react';
import '../../assets/css/App.css';
import './Resources.css';
import ResourcesList from '../data/data.json';
import { Link } from "react-router-dom";
import Toggle from "../Toggle";
import Disclaimer from "../Disclaimer/Disclaimer";

export default function Resources() {

return (
    <div className="container">
        <Toggle />
       <div className="grid">
        {
            ResourcesList.map(resource => 
              <article key={resource.id}> 
                <h1 data-testid="name">{resource.name}</h1>
                <p data-testid="body" className="text">{resource.body}
               </p>
               <Link data-testid="link" className="resourceLink" to={`/resources/${resource.id}`}><span>More info</span></Link>

              </article>)
        }
        </div> 
      <Disclaimer />
    </div> 
  );
}