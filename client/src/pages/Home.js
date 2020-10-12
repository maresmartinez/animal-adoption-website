import React from 'react';
import AnimalList from '../components/AnimalList';
import AnimalModal from '../components/AnimalModal';

const Home = () => (
  <>
    <h2>Welcome to Adopt-a-lot</h2>
    <AnimalModal />
    <AnimalList />
  </>
);

export default Home;