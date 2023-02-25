import React from 'react';
import { logo } from '../../assets/img/logo';

import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="logo" />
      <nav>
        <ul className='nav__links'>
          <li><a href="#">Главная</a></li>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Связаться с нами</a></li>
        </ul>
      </nav>
      <a href=""><button>Авторизация</button></a>
    </div>
  );
};

export default Header;
