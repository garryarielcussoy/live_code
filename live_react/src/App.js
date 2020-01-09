import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// import React from 'react';
// import MainRoute from './Routes/MainRoute'
// import {BrowserRouter, Link} from 'react-router-dom'
// import {Provider, connect} from 'unistore/react'
// import {store} from './store'
// import { render } from 'react-dom';

// class App extends React.Component{
//   render(){
//     return(
//       <MainRoute />
//     )
//   }

// }

// export default App;