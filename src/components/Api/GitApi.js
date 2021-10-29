import React, { useEffect, useState } from "react";
import Bubblechart from "../Resources/Bubblechart";
import "./GitApi.css";

const GitApi = () => {
  
  const [contributor, setContributor] = useState([]);

  useEffect(() => {
    const url = "https://api.github.com/repos/frontendstudygroup/frontendstudygroup.github.io/contributors";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setContributor(json)

      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

}, []);

return (

  <div className="container">
      <h1 className="b-title">Contributors</h1>
    <div className = "b-chart">
      <Bubblechart  data = {contributor}></Bubblechart>
    </div>
  </div>
);
};


export default GitApi;