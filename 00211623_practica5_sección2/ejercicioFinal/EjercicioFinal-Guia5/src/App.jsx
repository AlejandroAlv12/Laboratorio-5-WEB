import React from 'react';
import Cientifica from './components/Cientifica';
import { cientificas } from './data/cientificas';
import './index.css';

function App() {
  return (
    <div className="contenedor">
      <h1>Científicas notables</h1>
      {cientificas.map((c, index) => (
        <Cientifica key={index} {...c} />
      ))}
    </div>
  );
}

export default App;