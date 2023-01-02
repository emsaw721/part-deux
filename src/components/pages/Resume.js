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
        <div className='content'>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=League+Script&family=Playfair+Display:wght@900&display=swap');
</style>
        <h1 className='resumecontent'>Resume</h1>
            <ul> Front End
                <li>{getFEList}</li>
            </ul>
            <ul> Back End
                <li>{getBEList}</li>
            </ul>
        </div> 
    )
}

export default Resume; 