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
      <p className='intro'> My name is <span style={{color: '#415A77'}}> Emily Hill </span> and I am a full stack developer based in <span style={{color: '#415A77'}}>Houston, TX</span></p>
      <div className='background'>
        <div className='bgimgwrapper'>
      <img src="https://via.placeholder.com/250" />
      </div>
      <div className='bgpara'>
      <p>I grew up in Houston, but spent 10 years in New York City, where I attended Fordham University. There, earned my Bachelor of Arts in English and completed a Post-Baccelaureate Pre-Medical program.</p>
      </div>
      </div>
      {/* <div className='accomplishments'>
      <img src="https://via.placeholder.com/250" />
        <p>While in New York, I persued many service opportunities. I served as an Emergency Medical Technician, a tutor, and, during the COVID-19 pandemic, as a Nurse's Aid at St. John's Riverside Hospital.</p>
      </div> */}
    </div>
  );
}
