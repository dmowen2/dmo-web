import React from 'react'
import canthurtme from '../resources/canthurt.png'
import subtleart from '../resources/subtleart.png'
import artofwar from '../resources/artofwar.png'
import atomichabs from '../resources/atomichabits.png'

const Bookrec = () => {
    return (
        <div>


            <div className='page-header'>
                <div className = 'page-header-content'>
                    <h1>Book Recommendations</h1>
                </div>
            </div>

            <div className='bookrec-container'>
                <div className='bookrec-box'>
                    <div className='bookrec-imgblock'>
                    <img src = {canthurtme} height = {250} width = {200} className='bookrec-img'/>
                    </div>
                    <div className='bookrec-textbox'>
                        <p> I highly recommend this book to any sort of reader or individual. It offers a harsh yet realistic perspective on the difficulties of life. As well as
                        highlighting methods for individuals to accomplish their goals and better themselves to a point they thought they could never accomplish.
                        </p>
                    </div>
                </div>
                <div className='bookrec-box'>
                <div className='bookrec-imgblock'>
                    <img src = {subtleart} height = {250} width = {200} className='bookrec-img'/>
                    </div>
                    <div className='bookrec-textbox'>
 
                        <p> This book offers an interesting perspective on things that you should care about in life. Surprisingly the notion of the book is not entirely what the title 
                            happens to portray which ends up in a quite interesting read when one is looking to improve their outlook and happiness within their own life.
                        </p>
                    </div>
                </div>
                <div className='bookrec-box'>
                <div className='bookrec-imgblock'>
                <img src = {artofwar} height = {250} width = {200} className='bookrec-img'/>
                    </div>
                    <div className='bookrec-textbox'>
 
                        <p> This is perhaps my personal favorite book that I have read up to this point of time. The use of the strategies and methodology that he applied to war 
                            situations in Ancient China is fascinating when coupled with modern day interactions with other individuals and power dynamics within the social structure
                            of the modern day.
                        </p>
                    </div>
                </div>
                <div className='bookrec-box'>
                <div className='bookrec-imgblock'>
                <img src = {atomichabs} height = {250} width = {200} className='bookrec-img'/>
                    </div>
                    <div className='bookrec-textbox'>
 
                        <p> I highly recommend this book to anyone who is looking to improve their overall daily habits and habits throughout any part of their life. I personally learned a lot
                            from these methods introduced and used the methodology described throughout the book to get rid of my unproductive habits and replace them with productive ones.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bottom-spacer'>
            </div>
        </div>

        

/*             <div className='ourteam-content'>
            <div className='ourteam-imgblock'>
            <img src = {canthurtme} height = {250} width = {200} />
            </div>
            <div className='ourteam-textbox'>
            <p> I highly recommend this book to any sort of reader or individual. It offers a harsh yet realistic perspective on the difficulties of life. As well as
                highlighting methods for individuals to accomplish their goals and better themselves to a point they thought they could never accomplish.
            </p>
            </div>
            */

)

}

export default Bookrec