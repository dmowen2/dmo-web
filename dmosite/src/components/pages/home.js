import React from 'react'
import homeheadimg from '../resources/hometopimg.png'

const Home = () => {
    return (
        <div>
            <div className='page-header'>
            <div className = 'page-header-content'>
                <h1>Home</h1>
            </div>
            </div>
            <div className='page-title-box'>
            <h1>Welcome</h1>
            </div>
               
            <img src = {homeheadimg} className='heading-img'/>

            <div className='page-title-box'>
            <h1>Hello, I'm Derian!</h1>
            </div>
            <div className='statement-text-box'>
            <p> I am a student at Trinity University in San Antonio Texas and I am currently majoring in Computer Science. I am an aspiring software developer with interests in both front-end and back-end development.            </p>
            </div>


        </div>
    )
}

export default Home
