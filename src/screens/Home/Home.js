import React from 'react';
// import './App.css';
import { Header } from './components/Header/Header';
import Tecnologies from './components/Tecnologies/Tecnologies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/Tecnologies copy/About';

function Home() {
  return (
    <div>
      <Header></Header>
      {/* <Tecnologies></Tecnologies> */}
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div >
  );
}

export default Home;