import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import List from './Pages/List';
import AdTask from './Pages/AdTask';
import Context from './Context/Context';
import './App.css';

function App() {
  return (
    <Context>
        <Header />
      <section className='links-header'>
        <AdTask />
        <List />
      </section>
        <Footer />
    </Context>
  );
}

export default App;
