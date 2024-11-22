import React from 'react';
import { Hero } from '../pages/Hero';
import Navbar from '../pages/Navbar';
import Discover from '../pages/Discover';
import { Perfection } from '../pages/Perfection';
import { Guideline } from '../pages/Guideline';
import Counts from '../pages/Counts';
import Popular from '../pages/Popular';
import Testimonial from '../pages/Testimonial';
import Ticket from '../pages/Ticket';
import Footer from '../pages/Footer';
import Tips from '../pages/Tips';

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div id="discover">
        <Discover />
      </div>
      <div id="perfection">
        <Perfection />
      </div>
      <div id="guideline">
        <Guideline />
      </div>
      <div id="counts">
        <Counts />
      </div>
      <div id="popular">
        <Popular />
      </div>
      <Testimonial />
      <Ticket />
      <div id="tips">
        <Tips />
      </div>
      <hr></hr>
      <Footer />
    </div>
  );
};

export default Main;
