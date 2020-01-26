import React from 'react'
import '../App.css'
import {withRouter, Link} from 'react-router-dom'

const Header = (props) => {

  return(
    <div className="nav-bar">
      <div onClick ={() => props.history.push('/')}>
        HowMeme
      </div>
      <div className='nav-bar-links'>
        <Link to='product'>Product</Link>
        <Link to='memes'>Wall of Meme</Link>
        <Link to='contact'>Contact Us</Link>
      </div>
    </div>
  )
}

export default withRouter(Header)