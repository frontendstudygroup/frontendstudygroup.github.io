import React from 'react';
import '../../assets/css/App.css';
import './Resources.css';
import ResourcesList from '../data/data.json';

export default function Resources() {
  return (
    <>
      <section className="container">
        <ul>
          {
            ResourcesList.map (resource => <li key={resource.id}> {resource.name} </li>)
          }
        </ul>
      </section>

    </>
  );
}