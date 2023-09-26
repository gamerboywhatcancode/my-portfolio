import { useState } from 'react'


const Story = () => {


    const onaClick = (para) => {
        window.location = "/"
    }

    return (
        <>

        <div className='yessir'>
            <h1>my story</h1>
            <p>I'm a bangladeshi teenager. I started programming at the age of 9 due to my love of video games. <br/> im currently making 2 games.
            <br/> I make music as my hobby. gamedev is one of my favorite things to do.
            </p>
        <div className='buttons'>
          <button onClick={onaClick}>home</button>

        </div>
        </div>

     
            
        </>
    )
}

export default Story