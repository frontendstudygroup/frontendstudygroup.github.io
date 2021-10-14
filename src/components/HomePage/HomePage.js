import React from "react";
import './Homepage.css';



const HomePage = () => {

    return (

    <div className="body-style">
        <h1 className="title"> Open Source Internships</h1>
        <span className="sentence">We are an organization to help you find open source internships</span>
        <div className="open-source-line">What Open Source is ... </div>
        <div className="open-source-definition">a term that is referred to Open Source Software that is designed to be 
             publicly accessible meaning that any user can see, modify, and distribute the code.
        </div>
        <span className="ending-line">We are here to help you!</span>
        <button className="button">Start</button>
    </div>
    )

}

export default HomePage;