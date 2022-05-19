import React from 'react';
import Header from './Components/Header';
import List from './Pages/List';
import Footer from './Components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <section className='links-header'>
      <Header />
      <List />
      <Footer />
    </section>
  );
}

export default App;
