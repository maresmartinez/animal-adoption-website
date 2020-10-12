import React from 'react';

import { Provider } from 'react-redux';
import store from './store';
import AnimalList from './components/AnimalList';
import AnimalModal from './components/AnimalModal';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // Allows us to share state between components
    <Provider store={ store }>
      <div className="App">
        <h1>Hello World</h1>
        <AnimalModal />
        <AnimalList />
      </div>
    </Provider>
  );
}

export default App;
