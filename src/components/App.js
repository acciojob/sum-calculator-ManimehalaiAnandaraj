import React, { useState, useEffect } from 'react';

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(inputValue, 10);
    if (!isNaN(num)) {
      setNumbers(prev => [...prev, num]);
      setInputValue('');
    }
  };

  useEffect(() => {
    let isMounted = true;
    const timer = setTimeout(() => {
      const total = numbers.reduce((acc, curr) => acc + curr, 0);
      if (isMounted) {
        setSum(total);
      }
    }, 0);
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [numbers]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
        />
        <button type="submit">Add</button>
      </form>
      <div>Sum: {sum}</div>
    </div>
  );
}

export default SumCalculator;