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
                <h1>{resource.name}</h1>
                <p className="text">{resource.body}
               </p>
               <Link className="resourceLink" to={`/resources/${resource.id}`}><span>More info</span></Link>

              </article>)}
      </div> 
      <Disclaimer />
    </>   </article>)
          }
      </div>     

    </div>
  );
}