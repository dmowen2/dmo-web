import React from 'react'
import resume from '../resources/Resume.pdf'

const Resume = () => {
    return (
        <div>


            <div className='page-header'>
                <div className = 'page-header-content'>
                    <h1>Resume</h1>
                </div>
            </div>
            <div className='resume_div'>
                    <iframe height='600vw' src={resume} width="100%">
                    </iframe>
                </div>
        </div>
    )
}

export default Resume