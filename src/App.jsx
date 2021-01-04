import React, { useState } from 'react';

const App = () =>
{ 
  const [oldTxt,newTxt] = useState("");
  const [txt,changeTxt] = useState();

const inputEvent = (event) =>
{
    
 newTxt( event.target.value);
} 

const txtChange = (event) =>
{   
    changeTxt(", " + oldTxt);
    event.preventDefault();
}

    return(
        <>
        <div className="main_div">
        <form onSubmit={txtChange}>
        <div>
        <h1>
        Hello{txt}
        </h1>
        <input type='text' placeholder='Enter Your Name' onChange={inputEvent} value={oldTxt}></input>
        <button type= "submit" onClick={txtChange}>Click here to display your NAME</button>
        </div>
        </form>
        </div>
        </>
    );
}
export default App;
