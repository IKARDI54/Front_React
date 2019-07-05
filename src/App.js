import React from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import Navbar from './components/Navbar/Navbar.js'
import Form from './components/Form/Form.js'



function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Form />
    </div>
  );
}

export default App;
