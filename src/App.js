import logo from './logo.svg';
import './App.css';
import useScreenSize from './useScreenSize.js';

function App() {
  const isSmallScreen = useScreenSize();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {isSmallScreen ? "Small Screen" : "Big Screen"}
        </p>
      </header>
    </div>
  );
}

export default App;
