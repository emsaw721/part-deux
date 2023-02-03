import React, {useState} from 'react'; 
import './Resume.css';
import gradcap from './pagesimgs/gradcap.png';
import code from './pagesimgs/codeblocks.png'; 
import volicon from './pagesimgs/volunteericon.png'; 
import workicon from './pagesimgs/workicon.png'; 


function Resume() {
    const [frontEnd] = useState(['HTML', 'CSS', 'JavaScript', 'DOM Manipulation', 'JSON', 'AJAX', 'Web APIs', 'Third-Party APIs','Node', 'React', 'GraphQL API']);

    let getFEList= frontEnd.map((feskill) => {
        return <li>{feskill}</li>
    })

    const [backEnd] = useState([ 'Express', 'SQL', 'NoSQL', 'PWA', 'MongoDB'])
    let getBEList= backEnd.map((beskill) => {
        return <li>{beskill}</li>
    })

    return(
        <div className='resumecontent'>
     <style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@300&family=League+Script&family=Playfair+Display:wght@900&display=swap');
</style>
        <h1>At <span>・</span> A <span>・</span> Glance</h1>
        <div className='glance'>
        <img src={gradcap} /> B.A. & B.S. Fordham University <br/>
        <img src={code} />Coding Bootcamp at Rice University <span className='shortlistlink'> ✳︎see <a href='#theshortlist'>The Short List</a>✳︎</span><br/>
        <img src={volicon} /> EMT, Tutor, & Theatrical Outreach  <br/>
        <img src={workicon} /> Medical Examiner, Literary Intern, & Nurse's Aid<br/>
        </div>
        <div id='theshortlist'>
        <h2>The Short List</h2>
        <h3>Front End</h3>
            <ul>
                <li>{getFEList}</li>
            </ul>
            <h3>Back End</h3>
            <ul>
                <li>{getBEList}</li>
            </ul> 
        </div> 
        </div>
    )
}

export default Resume; 