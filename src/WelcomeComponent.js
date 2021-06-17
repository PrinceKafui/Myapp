import React from 'react';

const name = "Codetrain Ghana"
const names = 'React'
const you  = 'javascript'


const WelcomeComponent = () => {
    return (
        <>
         <h1>{names} is awesome at {name}!!!</h1>
         <p>React is a {you} library</p>
        </>
    )
}

export default WelcomeComponent;