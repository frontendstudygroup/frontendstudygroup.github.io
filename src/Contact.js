import React from "react";

export default function Contact() {
  return (
    <div>
      <form className="form" datacomponent="form">
        <h2 className="FormHeading" datacomponent="FormHeading">
          CONTACT US
        </h2>

        <p className="FormContent" datacomponent="FormContent" type="Name:">
          <input className="InputContent" placeholder="Your Name"></input>
        </p>

        <p className="FormContent" datacomponent="FormContent" type="Email:">
          <input
            className="InputContent"
            placeholder="Let us know how to contact you back.."
          ></input>
        </p>

        <p className="FormContent" datacomponent="FormContent" type="Message:">
          <input
            className="InputContent"
            placeholder="What would you like to tell us.."
          ></input>
        </p>

        <button className="SendMessageButton" datacomponent="SendMessageButton">
          Send Message
        </button>

        <div className="ContactInfo" datacomponent="ContactInfo">
          <span className="PhoneAndEmail" datacomponent="PhoneAndEmail"></span>000
          000 000
          <span className="PhoneAndEmail" datacomponent="PhoneAndEmail"></span>{" "}
          contact@company.com
        </div>
      </form>
    </div>
  );
}
