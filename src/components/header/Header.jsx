import React from 'react';
import { logo } from '../../assets/img/logo';

import './header.scss';

const Header = () => {
  return (
    <div className="header-block">
      <div className="left">
        <img src={logo} alt="LOGO" />
      </div>
      <div className="center">
        <ul>
          <li>ГЛАВНАЯ</li>
          <li>АУТИЗМ </li>
          <li>УСЛУГИ</li>
          <li>example</li>
        </ul>
      </div>
      <div className="right">
        <button>Авторизоваться</button>
        <button>Личный кабинет</button>
      </div>
    </div>
  );
};

export default Header;
