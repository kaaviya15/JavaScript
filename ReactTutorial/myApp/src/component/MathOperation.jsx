import { useState } from "react"


const MathOperation = () => {
    const[add,setAdd]=useState(0);
    const[subtract,setSubtract]=useState(0);
    const[multiply,setMultiply]=useState(0);
    const[divide,setDivide]=useState(0);
    function handleAddition(){
         
    }

  return (
    <div>
      <button onClick={handleAddition}>Add</button>
      <button onClick={handleSubtraction}>Subtract</button>
      <button onClick={handleMultiplication}>Multiply</button>
      <button onClick={handleDivision}>Divide</button>
    </div>
  )
}

export default MathOperation
