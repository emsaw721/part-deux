import React, {useState} from 'react'; 
import './style.css';

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