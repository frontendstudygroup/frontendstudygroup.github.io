import React from 'react';
import '../../assets/css/App.css';
import './SingleResource.css';
import { useParams } from "react-router-dom";
import data from '../data/data.json';

export default function SingleResource() {
  const { id } = useParams();
  return (
    <>
      <div className="fullCardContainer">
          { data
              .filter((resource) => resource.id === Number(id))
              .map((resource) => (
                <div className="fullCard" key={ resource.id }>
                  <h2>Name: {resource.name}</h2>
                  <h4>Duration: {resource.internship_period} months</h4>
                  <p>Application period: {resource.internship_period}</p>
                </div>
              ))}
      </div>     

    </>
  );
}