import { useState } from 'react'





const Interest = () => {


    const onaClick = (para) => {
        window.location = "/"
    }

    return (
        <>

        <div className='yessir'>
            
            <h1>my interests</h1>
            <p>I like programming, playing video games and football (the one that messi and ronaldo plays). im a bangladeshi teenager.
            <br/> I also make music. my soundcloud is fxxriswastxken.
            </p>


            <div className='buttons'>
            <button onClick={onaClick}>home</button>

            </div>
        </div>

     
            
        </>
    )
}

export default Interest