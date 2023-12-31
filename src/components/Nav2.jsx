import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Nav2() {
  const arrow = '>';

  return (
    <div className="second-nav h-20 bg-green-100 mx-auto pl-40 font-semibold text-green-700 flex items-center text-x1">
      
      <Link to="/">Home</Link> {arrow} Gala Apples
    </div>
  );
}
