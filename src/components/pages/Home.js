import React from 'react';

import './Home.css'; 
import headshot from './headshot.png'

export default function Home() {

  return (
    <div className='home'>
  <style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=League+Script&display=swap');
</style>
      <div className='name-plate'>
      <h1>hello</h1>
      </div>
      <img src={headshot} />
      <p> My name is <span style={{color: '#415A77'}}> Emily Hill </span> and I am a full stack developer based in <span style={{color: '#415A77'}}>Houston, TX</span></p>
    </div>
  );
}
