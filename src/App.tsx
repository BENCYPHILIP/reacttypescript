import React from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './components/Items'
import "antd/dist/antd.css";
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
      {/* <Items items={['Apple','Orange','Grapes','Banana']}/> */}
      <Navbar/>
    </div>
  );
}

export default App;
