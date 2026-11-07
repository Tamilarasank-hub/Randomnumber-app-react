
import React, { useState } from "react";
import "./App.css";

function App() {
  // Store the random number
  const [randomNumber, setRandomNumber] = useState(null);

  // Generate random number between 1 and 100
  const generateNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;

    setRandomNumber(number);
  };

  return (
    <div className="container">
      <div className="generator-card">
        <h1>Random Number Generator</h1>

        <p className="description">
          Generate a random number between 1 and 100
        </p>

        <div className="number-display">
          {randomNumber === null ? (
            <p className="placeholder">
              No number generated yet
            </p>
          ) : (
            <h2>{randomNumber}</h2>
          )}
        </div>

        <button
          className="generate-btn"
          onClick={generateNumber}
        >
          Generate Random Number
        </button>

        {/* Conditional Rendering */}
        {randomNumber !== null && (
          <p className="success-message">
            Random number generated successfully!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
