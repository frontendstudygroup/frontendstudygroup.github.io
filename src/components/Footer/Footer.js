import React from 'react';
import './Footer.css'
import WWCodeFrontEnd from '../../assets/images/WWCode-Logo.png'
import { useHistory } from 'react-router-dom';


export default function Footer(){
    const history = useHistory();

    return(
        <div className="footer">
            <div className="footer-items">
            <div className="icons">
            <a 
            target="_blank" 
            rel="noopener noreferrer"
             href="https://www.facebook.com/womenwhocode">
                 <i class="fab fa-facebook-square"></i></a>

            <a target="_blank"
            rel="noopener noreferrer" 
            href="https://www.instagram.com/wwcodefrontend1/">
                <i class="fab fa-instagram-square"></i></a>

            <a target="_blank"
             rel="noopener noreferrer" 
             href="https://twitter.com/WWCodeFrontEnd">
                 <i class="fab fa-twitter-square"></i></a>

            <a target="_blank" 
             rel="noopener noreferrer"
             href="mailto:frontend@womenwhocode.com">
                 <i class="fas fa-envelope"></i></a>
                 </div>

                 <div>
            <a href="/">
                <img src={WWCodeFrontEnd} alt="Women Who Code Front-End Logo" className="frontEnd-logo" />
            </a>
            </div>

            
            <div className="info">
            <p>Register for events and join our community</p>
            <a href="https://www.womenwhocode.com/frontend"
             target="_blank"
             rel="noopener noreferrer">https://www.womenwhocode.com/frontend</a>
            
             <p className="contributor" onClick={() => history.push('/contributor')}>contributors
             </p>
             </div>
             </div>

            <div className="copyright">
            <p>Copyright @ 2021 <a href="https://www.womenwhocode.com/frontend"
             target="_blank"
             className="copyright-link"
             rel="noopener noreferrer"
            >WWCodeFrontEnd</a> All Rights Reserved</p>
            </div>
            

        </div>
    )
}