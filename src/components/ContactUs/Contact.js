import React, { useState } from "react";
import { useHistory } from "react-router";
import InputField from "../InputField/InputField";
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
    }, 2000);
  }

  return (
    <div> 
      <form className="form" onSubmit={demoFormSubmit}>
        <h2 className="formHeading">
          CONTACT US
        </h2>
        <InputField 
          label="Name:" 
          placeholder="Your Name" 
          value={ formData.name } 
          onChange={ e => setFormData({ ...formData, name: e.target.value })} 
          error={ formData.nameError }  
        />
        <InputField 
          label="Email:" 
          placeholder="Let us know how to contact you back..." 
          value={ formData.email } 
          onChange={ e => setFormData({ ...formData, email: e.target.value })} 
          type="email" error={ formData.emailError } 
        />
        <InputField 
          label="Message:" 
          placeholder="What would you like to tell us..." 
          value={ formData.message } 
          onChange={ e => setFormData({ ...formData, message: e.target.value })} 
        error={ formData.messageError } 
        />

        {
          !formData.formSubmitted
          ?
            <button className="sendMessageButton" type="submit" >
              Send Message
            </button>
          :
          <div className="formSuccessMessage">
            Thanks for contacting us! <br /> We will try to revert back as soon as possible! <br /><small>Taking you to homepage...</small>
          </div>
        }

      </form>
    </div>
  );
}