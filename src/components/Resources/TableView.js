import React from 'react';
import ResourcesList from '../data/data.json';
import { Link } from "react-router-dom";
import styles from './TableView.module.css';
import Toggle from "../Toggle";

const TableView = props =>  {
return (
  <div className="container">
  <Toggle />
        <table className={styles['resource-table']}> 
            <th className= {styles['resource-table-head']}>ID</th>
            <th className= {styles['resource-table-head']}>Name</th>
            <th className= {styles['resource-table-head']}>URL</th>
            {
              ResourcesList.map(resource =>
              
              <tr className = {styles['resource-table-row']} key={resource.id}>
                <td className = {styles['resource-table-data']}>{resource.id}</td>
                <td className = {styles['resource-table-data']}>{resource.name}</td>
                <td className = {styles['resource-table-data']}>{<Link className="resourceLink" to={`/resources/${resource.id}`}><span>More info</span></Link>}</td>  
            </tr>
            
              )
            }
        </table>

   </div>
  );
}
export default TableView;