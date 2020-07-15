import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Component/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/configureStore';

const store = ConfigureStore();


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
     <Main/>
    </div>
    </BrowserRouter>
    </Provider >
  );
}

export default App;
