import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens :50
  });
  
  const handleBooks = (value) =>{

      setInv(prev => ({...prev,books : inv.books+value}))
    
  }

  const handleNote = (value) =>{

    setInv(prev => ({...prev,notebooks : inv.notebooks+value}))

  }

  const handlePen = (value) =>{

    setInv(prev => ({...prev, pens : inv.pens+value}))

  }

  const handleInk = (value) =>{

    setInv(prev => ({...prev, inkpens : inv.inkpens+value}))

  }


  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>{handleBooks(1)}}>+</button>
        <button className="circlularButton" onClick={()=>{handleBooks(-1)}}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>{handleNote(1)}}>+</button>
        <button className="circlularButton" onClick={()=>{handleNote(-1)}}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>{handlePen(1)}}>+</button>
        <button className="circlularButton" onClick={()=>{handlePen(-1)}}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>{handleInk(1)}}>+</button>
        <button className="circlularButton" onClick={()=>{handleInk(-1)}}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.notebooks+inv.pens+inv.inkpens}
    </div>
  );
};