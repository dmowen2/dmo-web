import React from 'react'
import './pages.css'
import dmopic from '../resources/websiteprofilepic.png'

const About = () => {
    return (
    <div> 
        <div className='page-header'>
            <div className = 'page-header-content'>
                <h1>About Me</h1>
            </div>
        </div>

        <div className='statement-text-box'>
            <h1>Vision</h1>
            <div className='statement-text'>
                <p>Our vision is an app that will enable casual friendship matching and that enables casual interactions between random users. We want people to be able to match with others with similar interests and foster genuine friendships with one another.</p>
            </div>
        </div>

        <div className='statement-text-box2'>
            <h1>Mission</h1>
            <div className='statement-text'>
                <p>Our mission is to enable people to easily match with others with similar interests and foster genuine friendships by using our categorical matching on our app.</p>
            </div>
        </div>

        <div className = 'statement-text-doublebox'>
            <h1>The Team</h1>
        </div>

        
    </div>
    )
}
// <img src={dmopic} alt="dmopic"/>
/*
<div className='ourteam-container'>
<div className='ourteam-header'>
   <h1>Team</h1>
</div>

<div className='ourteam-content'>
  <div className='ourteam-imgblock'>
        <img src = {dmopic} height = {250} width = {250} />
  </div>
  <div className='ourteam-textbox'>
      <p>Name: Derian Mowen</p> 
      <p>Position: Founder</p>
      <p>Email: dmowen@trinity.edu</p>
  </div>
</div>
</div>
*/

export default About