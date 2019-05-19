import React from 'react';
import './App.css';

function App() {
  return (
    <div className={`app app-wrapper`}>
        <header className='header'>
          <img src="images/header_logo.png" alt="header logo"/>
        </header>
        <nav className='nav'>
        </nav>
        <div className='content'></div>
    </div>
  );
}

export default App;
