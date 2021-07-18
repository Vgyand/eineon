import React from 'react';
import style from './UpperHeader.module.sass'

const UpperHeader = () => {
  return (
    <div className={style.wrapper_UpperHeader}>
      <div className="container">
        <div className="row">
          <p className="upperHeader-item col-sm-5" >
            Производство сварочного оборудования и источников питания марки NEON
          </p>
          <p className="upperHeader-item col-sm-2">
            Горячая линия <a href="tel:8 800 700-57-98">8 800 700-57-98</a>{' '}
          </p>
          <p className="upperHeader-item col-sm-2">
            <img src="" alt="" />
            <a href="#">Вход/Регистрация</a>
          </p>
          <p className="upperHeader-item col-sm-3">
            <img src="" alt="" /> Сервисный центр
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
