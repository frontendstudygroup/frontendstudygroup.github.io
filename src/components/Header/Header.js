import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import WWCLogo from '../../assets/images/WWCode-Pride-Logo.png';
import MenuIcon from '../../assets/images/MenuIcon.svg';
import CloseIcon from '../../assets/images/CloseIcon.svg';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <section className="headerWrap">
            <div className="logoWrap">
                <a href="/">
                    <img src={WWCLogo} className="logo" alt="Women Who Code Pride Logo" />
                </a>
                <a href="/">
                 <p className="logoText" >Frontend Study Group</p>
                </a>
            </div>
            <div className="navContainer" >
                <ul className={click ? "navOptions active" : "navOptions"}>
                    <Link to="/about" className="option mobileOption" onClick={closeMobileMenu}>
                            About
                    </Link>
                    <Link to="/resources" className="option mobileOption" onClick={closeMobileMenu}>
                            Resources
                    </Link>
                    <Link to="/contact" className="option mobileOption" onClick={closeMobileMenu}>
                            Contact Us
                    </Link>
                </ul>
                <ul className="navDisplay">
                    <Link to="/about" className="optionDisplay" onClick={closeMobileMenu}>
                            About
                    </Link>
                    <Link to="/resources" className="optionDisplay" onClick={closeMobileMenu}>
                            Resources
                    </Link>
                    <Link to="/contact" className="optionDisplay" onClick={closeMobileMenu}>
                            Contact Us
                    </Link>
                </ul>
                <div className="mobileMenu" onClick={handleClick}>
                    {click ? (
                        <img src={CloseIcon} alt="Icon to close Navigation Menu" className="menuIcon" />
                        ) : (
                        <img src={MenuIcon} alt="Icon to open Navigation Menu" className="menuIcon" />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Header;
