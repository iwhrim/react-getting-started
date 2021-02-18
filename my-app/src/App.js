import React from 'react';
import './App.css';
import Header from './Header';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Header name="Gustavo Teixeira" links={["Sobre", "Setup", "Tech"]}></Header>
      <Counter></Counter>
    </div>
  );
}


export default App;
