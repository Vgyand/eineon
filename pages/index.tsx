import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MainPageWrapper from '../components/mainPage';
import Head from 'next/head'

const MainPage = () => {
  return (
    <div>
      <Head><title>Ei-neon</title></Head>
      <MainPageWrapper />
    </div>
  );
};

export default MainPage;
