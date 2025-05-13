import React, { useState, useEffect } from 'react';

const App=() => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    let isMounted = true;
    const calculateSum = async () => {
      // Simulate asynchronous calculation to prevent UI freeze
      await new Promise(resolve => setTimeout(resolve, 0));
      if (isMounted) {
        const total = numbers.reduce((acc, num) => acc + num, 0);
        setSum(total);
      }
    };
    calculateSum();
    return () => { isMounted = false; };
  }, [numbers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = parseInt(inputValue, 10);
    if (!isNaN(number)) {
      setNumbers(prev => [...prev, number]);
      setInputValue('');
    }
  };

  return (
    <>
    <div>
      <h3>Sum Calculator</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
        />
        <button type="submit">Add</button>
      </form>
      <h2>Sum: {sum}</h2>
    </div>
    </>
  );
}

export default App;