import React from 'react'
import Navbar from './Navbar.jsx'
import { useState } from 'react';

function App() {

  let [color,setColor] = useState("white");

  return (
    <>
      <Navbar setColor = {setColor}/>
      <div className='w-full h-screen' style={{backgroundColor : color}}></div>
    </>
  );
}

export default App;
