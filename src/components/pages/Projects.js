import React from 'react';
import './Projects.css'; 
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
          <img src="https://via.placeholder.com/250" />
          <div className='buttoncontainer'>
          <button><a href="https://github.com/emsaw721/ragnarok">Github</a></button>
          <button><a href="https://emsaw721.github.io/ragnarok/">Github Pages</a></button>
          </div>
        </div>
        <div className='box'>
          <h2>Lab Bench Buddy</h2>
          <p>CSS, JavaScript, Handlebars, and SQL</p>
          <img src="https://via.placeholder.com/250" />
          <div className='buttoncontainer'>
          <button><a href="https://github.com/emsaw721/lab-rats">Github</a></button>
          <button><a href="https://obscure-lake-69191.herokuapp.com/">Heroku</a></button>
          </div>
        </div>
        <div className='box coming-soon'>
          <h2>Third Project Coming Soon!</h2>
          <p></p>
          <img src="https://via.placeholder.com/250" />
        </div>
        </div>
        <div className='boxcontainer myproj'>
        <div className='box'>
          <h2>Progressive Web Application</h2>
          <p>Webpack, IndexedDB, and Workbox</p>
          <img src="https://via.placeholder.com/250" />
          <button><a href="https://github.com/emsaw721/too-little-too-jate">Github</a></button>
        </div>
        <div className='box'>
          <h2>Social Media Website</h2>
          <p>NoSQL and Insomnia</p>
          <img src="https://via.placeholder.com/250" />
          <button><a href="https://github.com/emsaw721/miniature-pancake">Github</a></button>
        </div>
        <div className='box'>
          <h2>Run Buddy</h2>
          <p>HTML and CSS</p>
          <img src="https://via.placeholder.com/250" />
          <div className='buttoncontainer'>
          <button><a href="https://github.com/emsaw721/run-buddy">Github</a></button>
          <button><a href="https://emsaw721.github.io/run-buddy/">Github Pages</a></button>
          </div>
        </div>
        <div className='box'>
          <h2>Password Generator</h2>
          <p>JavaScript, HTML, and CSS</p>
          <img src="https://via.placeholder.com/250" />
          <div className='buttoncontainer'>
            <button><a href="https://github.com/emsaw721/password-generator">Github</a></button>
            <button><a href="https://emsaw721.github.io/password-generator/">Github Pages</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}
