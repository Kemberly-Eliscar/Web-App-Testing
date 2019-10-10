import React,{useState} from 'react';
import Dashboard from "./Components/Dashboard";
import Display from "./Components/Display";

function App() {
  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0)

  return (
    <div className="App">
      <span className="greet">Hello World</span>
    </div>
  );
}

export default App;
