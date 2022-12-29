import React from 'react';

import './Home.css'; 
import headshot from './headshot.png'

export default function Home() {

  return (
    <div className='home'>
      <div className='name-plate'>
      <h1>Hello</h1>
      </div>
      <img src={headshot} />
    </div>
  );
}
