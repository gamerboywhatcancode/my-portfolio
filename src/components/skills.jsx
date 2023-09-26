import { useState } from 'react'


const Skills = () => {


    const onaClick = (para) => {
        window.location = "/"
    }

    return (
        <>

        <div className='yessir'>
            <h1>my skills</h1>
            <p>I code in 4 main languages. Python,Lua, GDScript and JavaScript. I use Godot Game Engine to make my games.
               <br/> I can code in Python,Java and Haxe too, but im more comfortable with those 4.
            </p>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9FoXKul_5DIsmmkZaYAGyP_pHwhfKBgs1MnMKIFNC&s' alt='python'></img>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPVrw6_ORqIE6cW9JjmdV1Jj2r5N5Whv-HKJhhw6VqA&s'></img>
            <img src='data:image/png;base64,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'></img>
            <img src='https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/38a9cafe-c53e-47f2-f431-428120462000/public'></img>
        <div className='buttons'>
          <button onClick={onaClick}>home</button>

        </div>
        </div>

     
            
        </>
    )
}

export default Skills