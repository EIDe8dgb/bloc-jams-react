import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav class='navbar navbar-expand-lg navbar-light'>
          <a class='navbar-brand'>
            <Link to='/'>Landing</Link>
            </a>
          <a class='navbar-brand'>
            <Link to='/library'>Library</Link>
            </a>
          </nav>
          <div class="jumbotron">
            <h1 class="display-4">Bloc Jams</h1>
          </div>
        </header>
        <main>
          <Route exact path='/' component={Landing} />
          <Route path='/library' component={Library} />
          <Route path='/album/:slug' component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
