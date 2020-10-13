import React from 'react';
import AnimalList from '../components/AnimalList';
import AnimalModal from '../components/AnimalModal';
// import ImageUploader from '../components/ImageUploader';

const Home = () => (
  <>
    <h2>Welcome to Adopt-a-lot</h2>
    <p>Check out the animals below that are in need of a loving home.</p>
    {/* <ImageUploader /> */ }
    <AnimalModal buttonProps={ { color: 'dark' } } />
    <AnimalList />
  </>
);

export default Home;