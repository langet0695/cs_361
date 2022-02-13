import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
// import HomePage from './pages/MiniPage';
import Input_items from './data/input_items.js';
import User_inputs from './data/user_inputs.js'
import PossibleRecipes from './data/possible_recipes';
import Homepage from './pages/Homepage';

function App() {  

  return (

      <body class="App"  >
            <Router>
                <Route path="/" exact>
                  {/* <HomePage ValidMinis={ValidMinis}/> */}
                  <Homepage Input_items={Input_items} User_inputs={User_inputs} PossibleRecipes={PossibleRecipes}/>
                </Route>
            </Router>
      </body>
  );
}

export default App;
