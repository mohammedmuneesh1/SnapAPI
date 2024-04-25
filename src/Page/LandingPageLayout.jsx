import React, { useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import Aos from 'aos';

export default function LandingPageLayout() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className='max-w-screen mx-auto h-screen'>
    <Header/>
    <Outlet/>
    <Footer/>
    
    </div>
  );
}
