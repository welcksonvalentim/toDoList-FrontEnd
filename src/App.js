import React from 'react';
import Home from './Pages/Home';
import List from './Pages/List';
import Footer from './Components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <section className='links-header'>
      <Home />
      <List />
      <Footer />
    </section>
  );
}

export default App;
