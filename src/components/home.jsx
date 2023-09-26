import { useState } from 'react'


const Home = () => {

  console.log("hi")
  const onaClick = (para) => {
    window.location = "/skills"
}

  const on2Click = () => {
    window.location = '/interests'
  }
  const on3Click = () => {
    window.location = '/story'
  }
  const on4Click = () => {
    window.location = '/projects'
  }
  return (
    <>
      
      <div className='yessir'>
        <h1>faaris</h1>
        <h2 id='h2fr'>programmer, game developer and (maybe) web developer.</h2>

        <div className='buttons'>
          <button onClick={onaClick}>my skills</button>
          <button onClick={on2Click}>my interests</button>
          <button onClick={on3Click}>my story</button>
          <button onClick={on4Click}>my projects</button>
        </div>
        
      </div>
      
      
    </>
  )
}

export default Home
