import React from 'react';
import './Nav.css'; 
import downloadicon from './pages/pagesimgs/download.png'; 
import resume from '../components/assets/resume/hill_resume_2023.pdf';
function Nav({ currentPage, handlePageChange }) {
  return (
    <div className='navcontainer sidenav'>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@300&family=League+Script&family=Playfair+Display:wght@900&display=swap');
</style>
         <div className='resumebtn'>
       <button><img src={downloadicon} />
       <a href={resume} download='hill_resume_2023.pdf'> Download Resume </a></button>
      </div>
      <div>
    <ul className="nav">
      <li className="nav-item hover-2">
        <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
      </li>
      <li className="nav-item hover-2">
        <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'} >Projects</a>
      </li>
      <li className="nav-item hover-2">
        <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
      </li>
      <li className="nav-item hover-2">
        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
      </li>
          <li className="nav-item hover-2">
        <a href="#blog" onClick={() => handlePageChange('Blog')} className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}>Blog</a>
      </li>
    </ul>
    </div>
    </div>
  );
}

export default Nav;
