import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link,Route} from 'react-router-dom';
import MoviesPage from './components/pages/MoviesPage';
class App extends Component {
  render() {
    return (
      <div className="App">

          <h1 className="App-title">Welcome to React</h1>

          <p className="App-intro">
            <Link to="movies">Movies </Link></p>
          <Route path='/movies' component={MoviesPage}></Route>
      </div>
    );
  }
}

export default App;
