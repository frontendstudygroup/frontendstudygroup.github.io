import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
