import { useState } from "react";


const RandomQuote = () => {
    const[generateQuote,setGenerateQuote]=useState("");
    const quotes=["Everything happens for a reason",
        "God Knows","If not now,When?",];
        const handleClick=()=>{
            let random=Math.floor(Math.random()*quotes.length);
            setGenerateQuote(quotes[random]);
        }
  return (
    <div>
      <button onClick={handleClick} style={{margin:"8px",color:"black",backgroundColor:"grey"}}>Click to Generate Random Quote</button>
      <p>{generateQuote}</p>
    </div>
  )
}

export default RandomQuote
