import React from 'react';
import ResourcesList from '../data/data.json';
import { Link } from "react-router-dom";
import './TableView.css';
import Toggle from "../Toggle";


let header = Object.keys(ResourcesList[0]).map((key, index) => {
     return <th key={index}>{key === "id" && key}{key === "name" && key}{key === "url" && key}</th>
  })

export default function TableView() {
    
return (
  <>
  <Toggle />
  <div className="table">
        <tr>{header}</tr>
        {
          ResourcesList.map(resource =>
          
          <tr key={resource.id}>
            <td>{resource.id}</td>
            <td>{resource.name}</td>
            <td>{<Link className="resourceLink" to={`/resources/${resource.id}`}><span>More info</span></Link>}</td>  
         </tr>
         
          )
        }
  
  </div>
   </>
  );
}