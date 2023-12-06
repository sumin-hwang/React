import logo from './logo.svg';
import './App.css';
import notify from './notify';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import RedPage from './pages/RedPage';
import BluePage from './pages/BluePage';

function App() {
  // const onClick = () => {
  //   notify();
  // }
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" component={RedPage} />
        <Route path="/blue" component={BluePage}/>
      </Routes>
    </div>
  );
}

export default App;
