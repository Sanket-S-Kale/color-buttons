import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const [disabled, setDisabled] = useState(false)
  const newButtonColor = color === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button disabled={disabled} onClick={() => setColor(newButtonColor)} style={{backgroundColor: color}}>
        Change to {newButtonColor}
      </button>
      <input type="checkbox" checked={disabled} onChange={(e) => setDisabled(e.target.checked)} />
    </div>
  );
}

export default App;
