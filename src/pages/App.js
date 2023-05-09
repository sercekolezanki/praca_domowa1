import logo from './logo.svg';
import '../style/App.css';



function App() {
  return (
    
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/quiz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quiz
        </a>
        <a
          className="App-link"
          href="/zdjecie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zdjecie
        </a>
      </header>
    </div>
  );
}

export default App;
