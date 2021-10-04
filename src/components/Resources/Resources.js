import React from 'react';
import '../../assets/css/App.css';
import './Resources.css';
import ResourcesList from '../data/data.json';

export default function Resources() {
  return (
    <>
      <div className="grid">
          {
            ResourcesList.map(resource => 
              <article key={resource.id}> 
                <div className="text">{resource.name}
               </div>
              </article>)}
      </div>     

    </>
  );
}