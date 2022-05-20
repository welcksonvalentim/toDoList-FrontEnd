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
      <section className='links-header'>
        <Header />
        <AdTask />
        <List />
        <Footer />
      </section>
    </Context>
  );
}

export default App;
