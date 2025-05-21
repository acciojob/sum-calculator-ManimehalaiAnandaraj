import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input , setInput] = useState(0);
  const [sum , setSum]=useState(0);
  useEffect(()=>{
    setSum(sum + Number(input))
  },[input])
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input
          type="number"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App