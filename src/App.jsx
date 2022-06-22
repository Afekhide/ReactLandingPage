import * as React from 'react';
import {Managers, Navbar, Contact, Strategies} from './containers/exports'
import { Footer, Features,  DesignProf, Hero, Marketters } from './containers/exports';


export default function App() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Features/>
        <DesignProf/>
        <Managers/>
        <Marketters/>
        <Contact/>
        <Strategies/>
        <Footer/>  
    </>
  );
}