import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Services = () => (
  <div>
    <h1>Our Services</h1>
    <nav>
      <Link to="design">Design</Link> | <Link to="development">Development</Link>
    </nav>
    <Outlet /> {/* Renders the nested route components */}
  </div>
);

export default Services;
