import React from 'react'

const NavLinks = () => {
    const links = [
        {   id : 1,
            name: "Features"},
        { id : 2,
            name: "Affiliates"},
        { id : 3,
            name: "Pricing"},
        { id : 4,
            name: "Communities"},
    ]
 
 
    return (
  <>
  {
    links.map((link) =>{
        return(
            <div key={link.id} className="mx-3 font-medium">
                <h2>{link.name}</h2>
            </div>
        )
    })
    
    
    }
  </>
   
  )
}

export default NavLinks