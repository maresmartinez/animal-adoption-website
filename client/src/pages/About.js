import React from 'react';
import { Alert } from 'reactstrap';

const Home = () => (
  <>
    <h2>About Adopt-a-lot</h2>
    <p>
      Adopt-a-lot is a forum that allows animal rescue centers and animal shelters to post about the animals they have up for adoption. This gives those interested in adopting a chance to learn about animals from all across the city, without ever having to leave their home! You can browse many different species and breeds. If you find an animal that you'd like to learn more about, you can contact the poster for a chance to meet your potential new best friend!
    </p>
    <Alert color="primary">
      <strong>Disclaimer:</strong> Adopt-a-lot is not a real organization and the animals listed here are not really up for adoption! If you're interested in adopting a real animal in need, consider visiting <a href="https://www.petfinder.com/" target="_blank" rel="noopener noreferrer">petfinder.com</a> to find animals in your area.
    </Alert>
  </>
);

export default Home;