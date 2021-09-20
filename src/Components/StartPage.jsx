import React, { Fragment } from 'react';
import magnolia from '../Assets/magnolia.png';

// Home Page
const StartPage = () => (
  <Fragment>
    <h1>Start page</h1>
    <div className="container">
    <img className="magnolia" src={magnolia} alt="magnolia"/>
    <h2>Mikaela Fryklund</h2>
    </div>
    <div className="text-container">
    <h3>Welcome to my portfolio</h3>
    <h5>I recently graduated, and I am looking for my next adventure as a frontend developer, check out my projects and feel free to contact me!</h5>
   </div>
    <footer>©By Mikaela Fryklund</footer>
  </Fragment>
  );
  export default StartPage;