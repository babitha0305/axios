import React from 'react';
import './App.css';
import Body from './body';
import Sidebar from './sidebar';

function App() {
  return (
    <div>
    <div>
      <header />
    </div>
    <div>
      <Sidebar />
    </div>
    <div>
    <Body />
   </div>
    </div>
  );
}

export default App;
