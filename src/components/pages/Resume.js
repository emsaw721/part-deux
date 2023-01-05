import React, {useState} from 'react'; 
import './Resume.css';
import gradcap from './gradcap.png';
import code from './codeblocks.png'; 
import volicon from './volunteericon.png'; 
import workicon from './workicon.png'; 
import download from './download.png';


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
        <img src={code} />
           {/* <h3>Front End</h3>
            <ul>
                <li>{getFEList}</li>
            </ul>
            <h3>Back End</h3>
            <ul>
                <li>{getBEList}</li>
            </ul> */} <br/>
        <img src={volicon} /> EMT, Tutor, & Theatrical Outreach  <br/>
        <img src={workicon} /> Medical Examiner, Literary Intern, & Nurse's Aid<br/>
        </div>
        </div> 
    )
}

export default Resume; 