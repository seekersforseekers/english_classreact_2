import React from 'react';
import Name from './Name'
import './App.css';
import Onoffbuttons from './Onoffbuttons';
function App(variable_is_passinge) {
  return (
    <div className="App">
    <h1>Assignment1</h1>
    <h1>Fakhra Aslam</h1>
    <h1>BootCamp Class:3</h1>
    <div className="new">
    <Name name="Fakhra"/>
    <h1 className="App">Assignment2</h1>
    <h1 className="App">BootCamp Class:4</h1>
    <Onoffbuttons />
    </div>
    
    </div>
  );
}

export default App;
