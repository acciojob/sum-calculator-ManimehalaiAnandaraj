import React, { useState, useEffect } from 'react';
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
      setNumbers(prevNumbers => [...prevNumbers, num]); // Add number to the array
      setInputValue(''); // Clear input
      setErrorMessage(''); // Clear error message
    } else {
      setErrorMessage("Please enter a valid number"); // Show error message
    }
  };

  useEffect(() => {
    // Calculate the sum whenever the numbers array changes
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    setSum(total); // Update the sum state
  }, [numbers]);

  const handleClear = () => {
    setNumbers([]); // Clear numbers array
    setSum(0); // Reset sum
    setInputValue(''); // Clear input field
    setErrorMessage(''); // Clear error message
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update input value
          placeholder="Enter a number"
        />
        <button type="submit" disabled={inputValue === '' || isNaN(parseInt(inputValue, 10))}>Add</button>
      </form>

      {/* Display error message if there's an error */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <div className="sum-display">
        <p>Sum: <strong>{sum}</strong></p> 
      </div>

      {/* Clear button to reset the calculator */}
      <button onClick={handleClear}>Clear All</button>
    </div>
  );
}

export default App;