import React from 'react';
import '../../assets/css/App.css';
import './Disclaimer.css';

export default function Disclaimer(props) {

  return (
    <div>
      <div className="disclaimerContainer">
         <p>The source for the data used in this project is <a className="disclaimerLink" target="_blank" href="https://itsfoss.com/best-open-source-internships/" rel="noreferrer">"It's Foss"</a>, an award-winning web-portal that focuses on Open Source and <a className="disclaimerLink" target="_blank" href="https://www.geeksforgeeks.org/" rel="noreferrer">"GeeksforGeeks"</a>.</p>
      </div>     

    </div>
  );
}