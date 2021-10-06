import React from "react";
import './Contact.css'


export default function Contact() {
  return (
    <div> 

      <form className="form" >

        <h2 className="formHeading">
          CONTACT US
        </h2>

        <label for="name">Name:</label>
        <input type="text" id="name" className="inputContent" placeholder="Your Name" />

        <label for="email">Email:</label>
        <input type="email" id="email" className="inputContent" placeholder="Let us know how to contact you back.." />

        <label for="message">Message:</label>
        <input type="text" id="message" className="inputContent" placeholder="What would you like to tell us.." />

        <button className="sendMessageButton" >
          Send Message
        </button>

        {/* <div className="contactInfo">
          <span className="email" ></span>
          frontend@womenwhocode.com
        </div> */}
      </form>
    </div>
  );
}
