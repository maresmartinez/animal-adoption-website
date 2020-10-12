import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="App">
        <Container>
          <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/about' component={ About } />
          </Switch>
        </Container>
      </main>
    </>
  );
}

export default App;
