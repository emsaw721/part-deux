import React, {useState} from 'react'; 
import './style.css';

function Resume() {
    const [frontEnd, frontEndList] = useState(['HTML', 'CSS', 'JavaScript', 'Web APIs', 'Third-Party APIs']);

    let getFEList= frontEnd.map((feskill) => {
        return <li>{feskill}</li>
    })

    return(
        <div>
            <ul> Front End
                <li>{getFEList}</li>
            </ul>
            <ul> Back End
                <li>Node</li>
                <li>Express</li>
                <li>SQL</li>
                <li>NoSQL</li>
                <li>PWA</li>
                <li>React</li>
            </ul>
        </div> 
    )
}

export default Resume; 