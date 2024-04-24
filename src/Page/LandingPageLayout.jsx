import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

export default function LandingPageLayout() {
  return (
    <div className='max-w-screen mx-auto h-screen'>
    <Header/>
    <Outlet/>
    <Footer/>
    
    </div>
  );
}
