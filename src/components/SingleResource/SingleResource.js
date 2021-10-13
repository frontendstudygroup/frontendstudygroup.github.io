import React from 'react';
import '../../assets/css/App.css';
import './SingleResource.css';
import { useParams, useHistory } from "react-router-dom";
import data from '../data/data.json';
import Disclaimer from '../Disclaimer/Disclaimer';

export default function SingleResource() {
  const { id } = useParams();
  const history = useHistory();
  
  return (
    <div>
      <button className="singleResourceBtn" onClick={() => history.goBack()}>Go Back</button>
      
      <div className="fullCardContainer">
          { data
              .filter((resource) => resource.id === Number(id))
              .map((resource) => (
                <div className="fullCard" key={ resource.id }>
                  <h2 className="fullCardTitle">{resource.name}</h2>
                  <p className="fullCardDescription">{resource.description}</p>
                  <p>Duration: <strong>{resource.internship_period} months</strong></p>
                  {resource.application_period.length > 0 &&
                    <div><p>Application period:</p>
                      <div className="fullCardLabelsContainer">{ resource.application_period.map((month, index) => <span key={index} className="fullCardLabel">{ month }</span>) }</div>
                      </div>
                  }
                  <p>Stipend: {resource.stipend ? <strong>Paid</strong> : <strong>Unpaid</strong>}</p>
                  <p>Location: <strong>{ resource.location.join(', ')}</strong></p>
                  <a className="fullCardLink" target="_blank" href={resource.url} rel="noreferrer">Go to resource website</a>
                </div>
              ))}
      </div>     
      <Disclaimer />
    </div>
  );
}