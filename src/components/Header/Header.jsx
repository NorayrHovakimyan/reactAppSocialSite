import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="/images/header_logo.png" alt="header logo"/>
        </header>
    )
};


export default Header;