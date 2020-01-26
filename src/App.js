import React from 'react';
import {HashRouter} from 'react-router-dom'
import './App.css';
import routes from './routes'
import Header from './Components/Header'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <div className="main">
          {routes}
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
