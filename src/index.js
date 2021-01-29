import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Onoff() {
  const [value, setvalue]= React.useState(true);
  const light = value? "On" : "Off";

  return(<div className={`onoff ${light}`}>
        the bulb is {light} in room
        <br/>
        <button onClick={()=>setvalue(!value)} className="button">
          { value? "Off" : "On"}
        </button>
      </div>)
     
 
}

ReactDOM.render(
  <Onoff/>,
  document.getElementById('root')
);
