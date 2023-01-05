import React, {useState, useEffect} from 'react';
import './Home.css'; 
import headshot from './headshotedit.png';
import fordham from './Fordham_University_Logo.png'; 
import ems from './ems.png'; 

// to stop image at intro --> useEffect --> set function and stop point (y-offset), 
// scroll handler (within the useEffect) --> window.pageyoffset 

export default function Home(props) {

  const [isScrolling, setIsScrolling] = useState(null); 

  useEffect(() => {

    function scrollHandler () {
      const frame = document.getElementById('hello');
      const target = document.getElementById('intro');

      frame.scrollTo(0, target)
    }

    if(!isScrolling === null) {
      scrollHandler();
    }
  })

  return (
    <div className='home'>
<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@300&family=League+Script&family=Playfair+Display:wght@900&display=swap');
</style>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
<div className='name-plate'>
      <h1>hello</h1>
      </div>
      <div id='hello' className='homeimg'>
      <img src={headshot} />
      </div>
      <p id='intro' className='intro'> My name is <span style={{color: '#415A77'}}> Emily Hill </span> and I am a full stack developer based in <span style={{color: '#415A77'}}>Houston, TX</span></p>
      <div className='background'>
        <div className='bgimgwrapper'>
      <img src={fordham} />
      </div>
      <div className='bgpara'>
      <p>A native Houstonian, I spent 10 years in New York City, where I attended Fordham University. There, earned my Bachelor of Arts in English and completed a Post-Baccelaureate Pre-Medical program.</p>
      </div>
      </div>
      <div className='accomplishments'>
      <div className='accpara'>
        <p>While in New York, I served as an Emergency Medical Technician, a science and writing tutor, and, during the COVID-19 pandemic, as a Nurse's Aid at St. John's Riverside Hospital.</p>
        </div>
        <div className='accimgwrapper'>
      <img src={ems} />
      </div>
      </div> 
    </div>
  );
}
