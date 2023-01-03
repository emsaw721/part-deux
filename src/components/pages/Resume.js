import React, {useState} from 'react'; 
import './Resume.css';

function Resume() {
    const [frontEnd] = useState(['HTML', 'CSS', 'JavaScript', 'Web APIs', 'Third-Party APIs']);

    let getFEList= frontEnd.map((feskill) => {
        return <li>{feskill}</li>
    })

    const [backEnd] = useState(['Node', 'Express', 'SQL', 'NoSQL', 'PWA', 'React'])
    let getBEList= backEnd.map((beskill) => {
        return <li>{beskill}</li>
    })

    return(
        <div className='resumecontent'>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=League+Script&family=Playfair+Display:wght@900&display=swap');
</style>
        <h1>My Resume</h1>
        <h3>Front End</h3>
            <ul>
                <li>{getFEList}</li>
            </ul>
            <h3>Back End</h3>
            <ul>
                <li>{getBEList}</li>
            </ul>
            <button>Download Full Resume</button>
        </div> 
    )
}

export default Resume; 