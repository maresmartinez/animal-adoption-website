import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="App mx-auto mt-3">
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/about' component={ About } />
        </Switch>
      </main >
    </>
  );
}

export default App;
