import React from 'react';
import './style.css'; 
import headshot from './headshot.png'

export default function Home() {
  return (
    <div className='content'>
      <div className='name-plate'>
      <h1>Emily Hill</h1>
      <h4>Full Stack Web Developer</h4>
      </div>
      <img src={headshot} />
    </div>
  );
}
