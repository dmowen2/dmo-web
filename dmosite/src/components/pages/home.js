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

            <div className='hello-box'>
                <h1>Hello, I'm Derian</h1>
            </div>
            <div className='home-text-box'>
            <p> Welcome to my personal website and blog dedicated to documenting my experiences working on my programming projects and documenting anything I happen to learn withi Data Science and Computer Science. </p>
            </div>
            <div className='bottom-spacer'>
            </div>
        </div>
        
    )
}

export default Home
