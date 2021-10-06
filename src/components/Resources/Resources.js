import React from 'react';
import '../../assets/css/App.css';
import './Resources.css';
import ResourcesList from '../data/data.json';
import { Link } from "react-router-dom";

export default function Resources() {
  return (
    <>
      <div className="grid">
          {
            ResourcesList.map(resource => 
              <article key={resource.id}> 
                <div className="text">{resource.name}
                <Link className="resourceLink" to={`/resources/${resource.id}`}><span>More info</span></Link>
               </div>
              </article>)}
      </div>     

    </>
  );
}