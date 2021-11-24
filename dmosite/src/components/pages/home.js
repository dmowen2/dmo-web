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
            <p> Welcome to my personal website and blog dedicated to documenting my experiences working on my programming projects and showcasing my individual projects to any one who might be interested. </p>
            </div>
            <div className='guide-center'>
                <div className='guide-box'>
                    <h1>Page Guide</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
