
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>

      <div className='container  mb-2 pb-1'>
        <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
        <div className='container my-3'>
          <TextForm heading="Enter Your Text Here" />
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
