import React from 'react'
import logoImage from '/img/Logo.svg'
import { Link } from 'react-router-dom'


export default function header() {
  return (
    <div>
        <div>
         <Link to='/'><img className='enigmaLogo' src={logoImage} /></Link> 
        </div>

        <div className='wordsAbove'>
        <Link to='/veil'>  <h1 className='VeilWords'>VEIL OF FEAR</h1></Link>
          <Link to='/roadLim' ><h2 className='roadWord'>ROAD TO LIMANSK HEART OF ZONE</h2></Link>
          <Link to='/contact'><h3 className='contactWord'>CONTACT</h3></Link>
        </div>

    </div>
  )
}