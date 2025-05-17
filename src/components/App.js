import React, { useState, useEffect } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import './../styles/App.css';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(inputValue, 10);
    if (!isNaN(num)) {
      setNumbers(prevNumbers => [...prevNumbers, num]);
      setInputValue('');
      setErrorMessage(''); // Clear error message on successful submission
    } else {
      setErrorMessage("Please enter a valid number");
    }
  };

  useEffect(() => {
    // Calculate the sum whenever the numbers array changes
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    setSum(total);
      }, [numbers]);

  const handleClear = () => {
    setNumbers([]);
    setSum(0);
    setInputValue('');
    setErrorMessage('');
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
        />
        <button type="submit" disabled={inputValue === '' || isNaN(parseInt(inputValue, 10))}>Add</button>
      </form>
      
      <div className="sum-display">
        <p>Sum: <strong>{sum}</strong></p> 
      </div>
      </div>
  );
}

export default App;