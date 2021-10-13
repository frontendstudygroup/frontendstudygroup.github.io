import React from 'react';
import ResourcesList from '../data/data.json';
import { Link } from "react-router-dom";
import './TableView.css';
import Toggle from "../Toggle";

export default function TableView() {
return (
  <div className="container">
  <Toggle />
        <table> 
            <th>ID</th>
            <th>Name</th>
            <th>URL</th>
            {
              ResourcesList.map(resource =>
              
              <tr key={resource.id}>
                <td>{resource.id}</td>
                <td>{resource.name}</td>
                <td>{<Link className="resourceLink" to={`/resources/${resource.id}`}><span>More info</span></Link>}</td>  
            </tr>
            
              )
            }
        </table>

   </div>
  );
}