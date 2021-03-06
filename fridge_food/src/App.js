// Author: Travis Lange
// Author Email: langet@oregonstate.edu
// Date Last Edited: 3/11/2022


import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Homepage from './pages/Homepage';

function App() {  

  return (

      <body class="App"  >
            <Router>
                <Route path="/" exact>
                  <Homepage/>
                </Route>
            </Router>
      </body>
  );
}

export default App;
