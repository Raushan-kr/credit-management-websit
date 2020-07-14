import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Component/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Main/>
    </div>
    </BrowserRouter>
  );
}

export default App;
