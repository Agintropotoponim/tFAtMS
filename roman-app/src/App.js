import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/UI/Nav/NavBar';
import AppRouter from './components/AppRouter';
import './styles/App.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
