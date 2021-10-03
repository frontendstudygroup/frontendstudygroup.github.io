import React, { useState } from 'react';
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
                    <li className="option mobileOption" onClick={closeMobileMenu}>
                        <a href="#">
                            About
                        </a>
                    </li>
                    <li className="option mobileOption" onClick={closeMobileMenu}>
                        <a href="/resources">
                            Resources
                        </a>
                    </li>
                    <li className="option mobileOption" onClick={closeMobileMenu}>
                        <a href="#">
                            Contact Us
                        </a>
                    </li>
                </ul>
                <ul className="navDisplay">
                    <li className="optionDisplay" onClick={closeMobileMenu}>
                        <a href="#">
                            About
                        </a>
                    </li>
                    <li className="optionDisplay" onClick={closeMobileMenu}>
                        <a href="/resources">
                            Resources
                        </a>
                    </li>
                    <li className="optionDisplay" onClick={closeMobileMenu}>
                        <a href="#">
                            Contact Us
                        </a>
                    </li>
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
