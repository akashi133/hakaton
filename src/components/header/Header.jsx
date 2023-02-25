import React from 'react';
import { logo } from '../../assets/img/logo';

import './header.scss';

const Header = () => {
  return (
    <header>
        <img src={logo} alt="logo"/>
        <nav>
            <ul className='nav__links'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <a href="/signin"><button>LOGIN</button></a>
    </header>
  );
};

export default Header;
