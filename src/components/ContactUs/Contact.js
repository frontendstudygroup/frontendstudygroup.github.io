import React, { useState } from "react";
import { useHistory } from "react-router";
import './Contact.css';

const isEmailValid = ( email ) => /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email);

export default function Contact() {

  const history = useHistory();
  const [ formData, setFormData ] = useState({ 
    name: "",
    email: "", 
    message: "",
    nameError: false,
    emailError: false,
    messageError: false,
    formSubmitted: false
  });

  const demoFormSubmit = (e) => {
    e.preventDefault();
    if(formData.name === "" ) return setFormData({ ...formData, nameError: true });
    if(!isEmailValid(formData.email)) return setFormData({ ...formData, emailError: true });
    if(formData.message === "" ) return setFormData({ ...formData, messageError: true });
    setFormData({...formData, formSubmitted: true });
    setTimeout(() => {
      history.push("/");
    }, 1500);
  }

  return (
    <div> 

      <form className="form" onSubmit={demoFormSubmit}>

        <h2 className="formHeading">
          CONTACT US
        </h2>

        <label for="name">Name:</label>
       <input type="text" id="name" placeholder="Your Name" 
        value={formData.name} 
        onChange={ e => setFormData({ ...formData, name: e.target.value })} />
       <p className={formData.nameError ? "formContentError" : ""} type={formData.nameError ? "This field is required" : ""} ></p>


       <label for="email">Email:</label>
       <input type="email" id="email"  placeholder="Let us know how to contact you back.." 
        value={formData.email} 
        onChange={ e => setFormData({ ...formData, email: e.target.value })}
        />
       <p className={formData.emailError ? "formContentError" : ""} type={formData.emailError ? "Please enter a valid email" : ""}>
         </p>

      <label for="message">Message:</label>
      <input type="text" id="message" placeholder="What would you like to tell us.." value={formData.message} 
       onChange={ e => setFormData({ ...formData, message: e.target.value })}
        />
      <p className={formData.messageError ? "formContentError" : ""} type={formData.messageError ? "This field is required)" : ""}></p>

        {
          !formData.formSubmitted
          ?
            <button className="sendMessageButton" type="submit" >
              Send Message
            </button>
          :
          <div className="formSuccessMessage">
            Thanks for contacting us! <br /> We will try to revert back as soon as possible!
          </div>
        }
      </form>
    </div>
  );
}