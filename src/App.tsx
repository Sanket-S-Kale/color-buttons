import { useState } from "react";
import "./App.css";

export const replaceCamelWithSpaces = (colorName: string): string => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [color, setColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = color === "red" ? "blue" : "red";
  return (
    <div>
      <button
        disabled={disabled}
        onClick={() => setColor(newButtonColor)}
        style={{ backgroundColor: disabled ? "gray" : color }}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
