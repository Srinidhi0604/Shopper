import React from 'react'
import  './Newsletter.css'

function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>

        <div className='input'>
            <input type="email" placeholder='Your email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
