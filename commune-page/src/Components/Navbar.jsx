import React from 'react'

import logo from  '../Assets/Group5.png'


function NavBar() {
  return (  
    <div  className='  font-poppins '>
      
        <nav className="flex justify-between items-center">
            <div className="h-10 w-24">
              <img src={logo}/>
               
            </div>

            <div className="flex list-none text-base items-center">
                <li className='mr-4'>Home</li>
                <li className='mr-4'>Products</li>
                <li className='mr-4'>Gallery</li>
                <li className='mr-4'>Contact</li>
             
            </div>

           
        </nav>
      
    </div>
  )
}

export default NavBar
