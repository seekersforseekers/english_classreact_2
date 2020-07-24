import React from 'react';
import './App.css';

 function Name (variable_is_receiving){
    return(
        <div>
<p className="App">hello <strong>{variable_is_receiving.name}</strong></p>
<ul>
    <li>Morning</li>
    <li>Day</li>
    <li>Evening</li>
    <li>Night</li>
</ul>
</div>    );
    
}
export default Name;