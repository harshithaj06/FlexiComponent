import logo from './logo.svg';
import './App.css';
import Flexi from './components/Flexi';
import { flexiConfig } from './flexiConfig';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <Flexi onSubmit={() => {}} config={flexiConfig} />
      </header>
    </div>
  );
}

export default App;
