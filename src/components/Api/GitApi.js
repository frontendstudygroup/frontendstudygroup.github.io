import React, { useEffect, useState } from "react";
import Bubblechart from "../Resources/Bubblechart";

const GitApi = () => {
  
  const [contributor, setContributor] = useState([]);

  useEffect(() => {
    const url = "https://api.github.com/repos/Priyami/frontendstudygroup.github.io/contributors";

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

  <div>
    
    <Bubblechart data = {contributor}></Bubblechart>
    
  </div>
);
};


export default GitApi;