import React,{useState} from 'react';
import Dashboard from "./Components/Dashboard";
import Display from "./Components/Display";
import './App.css';

function App() {
  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState (0);

  return (
    <div className="App">
      <header className="App-header">
        Baseball Scoreboard
      </header>
      <Display />
      ballCount={ballCount} strikeCount={strikeCount}
      <Dashboard
        ballCount={ballCount}
        strikeCount= {strikeCount}
        setBallCount={setBallCount}
        setStrikeCount={setStrikeCount}
        />
    </div>
  );
}

export default App;