import React from 'react';
import style from 'mainPage.module.sass';
import Head from './Header';
import UpperHead from './UpperHeader';

const MainPageWrapper = () => {
  return (
    <div>
      <UpperHead />
      <Head />
    </div>
  );
};

export default MainPageWrapper;
