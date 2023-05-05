import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandinPage/LandingPage';
import HomePage from './components/HomePage/HomePage';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import RecipeForm from './components/RecipeForm/RecipeForm';




  const App = () => {
    return ( 
      <Router>
        <Route exact path ="/" component={LandingPage} />
        <Route exact path ="/home" component={HomePage} />
        <Route exact path="/recipes/:id" component={RecipeDetail} />
        <Route exact path="/recipes-form" component={RecipeForm} />
      </Router>
    )
  }


export default App;
