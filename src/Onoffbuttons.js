

import React,{useState} from 'react';
import './App.css';
function Onoffbuttons (){
    let[light,setlight]=useState(false);
  let[temp,settemp]=useState(72);
  let[count,setcount]=useState(10);
      function fun1(){
       setcount(++count);
    }

    function fun2(){
        setcount(--count);
    }
        
    
return(
<div className={`lit ${light? "On":"off"}`}>
    <br/>
temperature is :{light?"46":"23"}
<br/>
<button onClick={()=>{setlight(true)}}>Turn Light On</button>

<button onClick={()=>{setlight(false)}}>Turn Light Off</button>
<br/>
count  is : {count}
<br/>
<button onClick={fun1}>Increase Numbers</button>

<button onClick={fun2}>Decrease Numbers</button>
</div>
);

}
export default Onoffbuttons;