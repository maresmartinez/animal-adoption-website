import React from 'react';
import AnimalList from '../components/AnimalList';
import AnimalModal from '../components/AnimalModal';

const Home = () => (
  <>
    <h2>Welcome to Adopt-a-lot</h2>
    <p>Check out the animals below that are in need of a loving home.</p>
    <AnimalModal />
    <AnimalList />
  </>
);

export default Home;