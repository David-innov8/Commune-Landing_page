import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/Logo.svg'
import NavLinks from './NavLinks'
const Navbar = () => {





  return (
    <nav className='bg-slate-100 flex rounded-lg p-7 justify-between items-center'>
        <div className=''>
        
       <img src= {Logo}/>
        </div>

        <ul className='flex mx-4'>
           
           <NavLinks/>
        </ul>
{/*     

            
        <div>
        <FontAwesomeIcon icon={faBars}  size="lg" id='dropdownDafaultButton' data-dropdown-toggle = "dropdown"/>

        
        </div> */}
        
      
    </nav>
  )
}

export default Navbar
