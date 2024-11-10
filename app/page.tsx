import React from 'react';
import Head from 'next/head';
import Header from '@/app/components/Header/Header';
import Hero from '@/app/components/Herosection/Hero';

const Homepage = () => {
  return (
    <div>
      <Head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </Head>
      <Header />
      <Hero />
    </div>
  );
};

export default Homepage;
