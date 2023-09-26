import { useState } from 'react'


const Projects = () => {


    const onaClick = (para) => {
        window.location = "/"
    }

    return (
        <>

        <div className='yessir'>
            <h1>my projects</h1>
            <p>
                i dont have any projects (that im proud of) out atm. I'll put them here when i can.
            </p>

            <h1>my wip projects</h1>
            <ul>
                <li>
                    <h3>
                        Cube The Explorer
                    </h3>
                </li>
                <li>
                    <h3>
                        not gonna tell yet hehe
                    </h3>
                </li>
                <li>
                    <h3>
                        Actuality Tower Defense
                    </h3>
                </li>
            </ul>
           
        <div className='buttons'>
          <button onClick={onaClick}>home</button>

        </div>
        </div>

     
            
        </>
    )
}

export default Projects