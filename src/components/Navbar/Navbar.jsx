import React from 'react';
import s from './Header.module.css';

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul>
                <li><a href="/profile">Profile </a></li>
                <li><a href="/content">Content </a></li>
                <li><a href="/messages">Messages </a></li>
                <li><a href="/settings">Settings </a></li>
            </ul>
        </nav>
    )
}


export default Navbar;

