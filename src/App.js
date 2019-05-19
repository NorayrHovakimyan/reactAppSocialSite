import React from 'react';
import './App.css';

function App() {
  return (
    <div className={`app app-wrapper`}>
        <header className='header'>
          <img src="images/header_logo.png" alt="header logo"/>
        </header>
        <nav className='nav'>
            <ul>
                <li><a href="/profile">Profile </a></li>
                <li><a href="/content">Content </a></li>
                <li><a href="/messages">Messages </a></li>
                <li><a href="/settings">Settings </a></li>
            </ul>
        </nav>
        <div className='content'>
           <div className='content_bg'>
                <img src="images/content_bg.jpg" alt="content background"/>
           </div>
            <div>
                avatar + description
            </div>
            <div>
                My posts
                <div>
                    new post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
                <div>
                    post 3
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
