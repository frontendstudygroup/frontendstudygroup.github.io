import { useState } from "react";
import { useHistory } from "react-router";
import "./styles.css";

const ContactUs = () => {

    const history = useHistory();

    const [ formData, setFormData ] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
        status: "initial"
    });

    // This array of objects is for styling of labels and to show errors
    const [ labelStyles, setLabelStyles ] = useState([
        { bottom: "8px", opacity: 0.8, color: "grey" },
        { bottom: "8px", opacity: 0.8, color: "grey" },
        { bottom: "8px", opacity: 0.8, color: "grey" },
        { bottom: "8px", opacity: 0.8, color: "grey" },
    ]);

    // modifying label position when users tries to enter text in input fields
    const modifyLabelPosition = ( labelIndex ) => {
        const newStyles = labelStyles.map( ( eachStyle, i) => {
            if( i !== labelIndex ) return eachStyle = { bottom: "8px", opacity: 0.8 };
            return eachStyle = { bottom: "28px", opacity: 0.9 };
        });
        return setLabelStyles( newStyles );
    }

    // modifying label colors when users leaves any field empty
    const modifyLabelColor = ( labelIndex ) => {
        const newStyles = labelStyles.map( ( eachStyle, i) => {
            if( i === labelIndex ) return eachStyle = { bottom: "28px", opacity: 1, color: "red" };
            return eachStyle;
        });
        return setLabelStyles( newStyles );
    }

    const submitForm = (e) => {
        e.preventDefault();
        // Avoid form submit if invalid data entered
        if( !formData.firstname ) return modifyLabelColor(0);
        if( !formData.lastname ) return modifyLabelColor(1);
        if( !formData.email ) return modifyLabelColor(2);
        if( !formData.message ) return;

        setFormData({firstname: "",lastname: "",email: "",phone: "",message: "",status: "submitted"});

        // timeout for demo purpose only, will be removed when backend will be integrated
        setTimeout(() => {
            history.push("/")
        }, 1200);

    };
    return (
        <div className="contact-page-wrapper contact-form-flexy">
            <div className="info">Drop us your message, we will try to revert back as soon as possible !</div>
            <form className="contact-form-flexy contact-form-flexy-row" onSubmit={ submitForm }>
                <div className="form-row contact-form-flexy flex-dr">
                    <div>
                        <label style={ formData.firstname ? {bottom: "28px", opacity: 0.9} : labelStyles[0] } onClick={ () => modifyLabelPosition(0) } >First Name</label>
                        <input onFocus={ () => modifyLabelPosition(0) } onChange={ e => setFormData({ ...formData, firstname: e.target.value })} value={ formData.firstname } />
                    </div>
                    <div>
                        <label style={ formData.lastname ? {bottom: "28px", opacity: 0.9} : labelStyles[1] } onClick={ () => modifyLabelPosition(1) } >Last Name</label>
                        <input onFocus={ () => modifyLabelPosition(1) } onChange={ e => setFormData({ ...formData, lastname: e.target.value })} value={ formData.lastname } />
                    </div>
                </div>
                <div className="form-row contact-form-flexy">
                    <label style={ formData.email ? {bottom: "28px", opacity: 0.9} : labelStyles[2] } onClick={ () => modifyLabelPosition(2) } >Email</label>
                    <input type="email" onFocus={ () => modifyLabelPosition(2) } onChange={ e => setFormData({ ...formData, email: e.target.value })} value={ formData.email } />
                </div>
                <div className="form-row contact-form-flexy">
                    <label style={ formData.phone ? {bottom: "28px", opacity: 0.9} : labelStyles[3] } onClick={ () => modifyLabelPosition(3) } >Phone (Optional)</label>
                    <input type="number" onFocus={ () => modifyLabelPosition(3) } onChange={ e => setFormData({ ...formData, phone: e.target.value })} value={ formData.phone } />
                </div>
                <div className="form-row contact-form-flexy">
                    <textarea placeholder="Your message" rows={6} onChange={ e => setFormData({ ...formData, message: e.target.value })} value={ formData.message } />
                </div>
                {
                    formData.status === "initial"
                    ?
                    <button type="submit">
                        Send Message
                    </button>
                    :
                    formData.status === "submitted"
                    ?
                    <div className="info">
                        Thanks for contacting us!
                        <p>Taking you to homepage🤍</p>
                    </div>
                    :
                    ""
                }
                
            </form>
        </div>
    )
}

export default ContactUs
