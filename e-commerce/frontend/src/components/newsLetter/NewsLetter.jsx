import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive offers on You Email</h1>
        <p>Subscribe to our new Letter and Stay Updated</p>
    <div>
      <input type="email" placeholder='Your E-mail ID'/>
      <button>Subscribe</button>
    </div>
    </div>
  )
}
export default NewsLetter