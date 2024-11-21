import React from 'react'
import Button from '@mui/material/Button';
import HeroSearch from './HeroSearch';

export const Hero = () => {
  return (
    <div className="hero_wrapper">
      <div className="background_image"></div> {/* Separate div for background image */}
      <div className="container hero_section">
        <div className="hero_content">
          <h2>Discover the most engaging places</h2>
          <small>Less planning 45,000 trips are ready for you</small>
          <Button variant="contained">Show more</Button>
        </div>
          <div className="hero_searchbar">
            <HeroSearch />
          </div>
      </div>
    </div>
  );
};
