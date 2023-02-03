import React from 'react';
import './Projects.css'; 
import marvel from './pagesimgs/marvel.png';
import labbench from './pagesimgs/labbench.png';
import oink from './pagesimgs/oinkicon1.png'; 
import pwa from './pagesimgs/pwa.png';
import socialmedia from './pagesimgs/socialmediaweb.png';
import runbuddy from './pagesimgs/runbuddy.png';
import passgen from './pagesimgs/pass-gen.png';
export default function Projects() {
  return (
    <div className='projectscontent'>
<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@300&family=League+Script&family=Playfair+Display:wght@900&display=swap');
</style>
      <h1>My Projects</h1>
      <div className='boxcontainer groupproj'>
        <div className='box'>
          <h2>Marvel Character Index</h2>
          <p>CSS and JavaScript</p>
          <img src={marvel} />
          <div className='buttoncontainer'>
          <button><a href="https://github.com/emsaw721/ragnarok">Github</a></button>
          <button><a href="https://emsaw721.github.io/ragnarok/">Github Pages</a></button>
          </div>
        </div>
        <div className='box'>
          <h2>Lab Bench Buddy</h2>
          <p>CSS, JavaScript, Handlebars, and SQL</p>
          <img src={labbench} />
          <div className='buttoncontainer'>
          <button><a href="https://github.com/emsaw721/lab-rats">Github</a></button>
          <button><a href="https://obscure-lake-69191.herokuapp.com/">Heroku</a></button>
          </div>
        </div>
        <div className='box'>
          <h2>Oink! The Budget App</h2>
          <p>MERN, CSS, and NPM Packages</p>
          <img src={oink} />
          <div className='buttoncontainer'>
          <button><a href='https://github.com/emsaw721/stacks-on-stacks/tree/develop'>Github</a></button>
          <button><a href='https://guarded-gorge-65763.herokuapp.com/'>Heroku</a></button>
          </div>
        </div>
        </div>
        <div className='boxcontainer myproj'>
        <div className='box'>
          <h2>Progressive Web Application</h2>
          <p>Webpack, IndexedDB, and Workbox</p>
          <img src={pwa} />
          <button><a href="https://github.com/emsaw721/too-little-too-jate">Github</a></button>
        </div>
        <div className='box'>
          <h2>Social Media Website</h2>
          <p>NoSQL and Insomnia</p>
          <img src={socialmedia} />
          <button><a href="https://github.com/emsaw721/miniature-pancake">Github</a></button>
        </div>
        <div className='box'>
          <h2>Run Buddy</h2>
          <p>HTML and CSS</p>
          <img src={runbuddy} />
          <div className='buttoncontainer'>
          <button><a href="https://github.com/emsaw721/run-buddy">Github</a></button>
          <button><a href="https://emsaw721.github.io/run-buddy/">Github Pages</a></button>
          </div>
        </div>
        <div className='box'>
          <h2>Password Generator</h2>
          <p>JavaScript, HTML, and CSS</p>
          <img src={passgen} />
          <div className='buttoncontainer'>
            <button><a href="https://github.com/emsaw721/password-generator">Github</a></button>
            <button><a href="https://emsaw721.github.io/password-generator/">Github Pages</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}
