import React from 'react';
import './Footer.css';
import github from './pages/githubicon.png';
import linkedin from './pages/linkedinicon.png'; 
import instagram from './pages/instagramicon.png';

function Footer() {
    return (
<div className='footer'>
 <style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@300&family=League+Script&family=Playfair+Display:wght@900&display=swap');
</style>
<a href="https://github.com/emsaw721"><img src={github}/></a>
<a href="https://linkedin.com/in/emily-hill-95a545241"><img src={linkedin}/></a>
<a href="#instagram"><img src={instagram}/></a>
</div>
)
}

export default Footer; 