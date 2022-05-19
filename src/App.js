import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import List from './Pages/List';
import AdTask from './Pages/AdTask';
import './App.css';

function App() {
  return (
    <section className='links-header'>
      <Header />
      <AdTask />
      <List />
      <Footer />
    </section>
  );
}

export default App;
