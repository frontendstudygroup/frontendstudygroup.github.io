import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <p className="description">
        The Frontend Study Group is a beginner-friendly project started by Women Who Code Front End to learn about front end
        technologies as well as how to collaborate on an open source project in the spirit of Hacktoberfest. 
        The study group aims to cover the following topics:
      </p>
      <ul className="list">
        <li>HTML, CSS and Javascript</li>
        <li>React</li>
        <li>Deploying your application</li>
        <li>Contributing to opensource</li>
      </ul>
      <h2 className="title">The Open Source ChatShow</h2>
      <p>For the month of October, 2021, we have weekly virtual sessions showcasing voices from the open source community.
          Feel free to <a href="https://us02web.zoom.us/webinar/register/WN_0i4q_-RxRnGyr3t_uD_XXw" target="_blank" rel="noopener noreferrer" className="link">
            join us!
          </a>
      </p>
      <p>
        You can also check out our <a href="https://frontendstudygroup.github.io/blog/" target="_blank" rel="noopener noreferrer" 
        className="link">blog</a> or contribute to <a href="https://github.com/frontendstudygroup/frontendstudygroup.github.io" target="_blank" rel="noopener noreferrer" className="link">this project.</a> 
      </p>
    </div>
  )
}

export default About;
