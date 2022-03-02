import React, { useState } from "react";
import quotes from "../quotes.json";
const getRandom = () => Math.floor(Math.random() * quotes.length);
const colors = [
    "#845EC2",
    "#D65DB1",
    "#FF6F91",
    "#FF9671",
    "#FFC75F",
    "#F9F871"
  ];
  
  const Card = () => {
    const [quote, setCard] = useState(quotes[getRandom()]);
    const changeCard = () => {
      const random = getRandom();
      setCard(quotes[random]);
    };
  
    const color = colors[Math.floor(Math.random() * 6)];
  
    document.body.style = `background: ${color}`;
  
    console.log(quote);
  
    return (
      <div className="QuoteBox" style={{ color: color }}>
         <p id="quote"> "{quote.quote}"</p> 
         <p id="author"> {quote.author} </p> 
         <button onClick={changeCard} > <i className="fa-solid fa-circle-dot"></i>Chage quote</button>
        
      </div>
    );
  };
  
  export default Card;
  