import './App.css';
import React from 'react';
import Clock from './components/Clock'

function App() {
  return (
    <div className="App">
      <div id='body' style={{textAlign: "center"}}>
        <Clock />
      </div>
    </div>
    
  );
  
}


export default App;
