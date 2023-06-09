import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LangingPage';
import Home from './components/Home/Home';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import About from './components/About/About';
import './App.css'
/* import { useEffect, useState } from 'react'; */


function App() {

 

  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/home" component={Home}/>
      <Route path="/recipes/:id" component={RecipeDetail} />
      <Route path="/create" component={CreateRecipe}/>
      <Route path="/about" component={About}/>
      
    </div>
  );
}

export default App;
