import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const newButtonColor = color === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button onClick={() => setColor(newButtonColor)} style={{backgroundColor: color}}>
        Change to {newButtonColor}
      </button>
      <input type="checkbox" />
    </div>
  );
}

export default App;
