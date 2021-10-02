import React from 'react';
import logo from '../../logo.svg';
import '../../assets/css/App.css';

const Main = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Hacktoberfest!
            </p>
            <a
                className="App-link"
                href="http://womenwhocode.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
            Supported by Women Who Code
            </a>
      </header>
    )
}

export default Main;
