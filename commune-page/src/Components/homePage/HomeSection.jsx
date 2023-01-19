import React from 'react'
import NavBar from '../NavBar';

import Shirt from '../../Assets/shirt.png'
import shoes from '../../Assets/shoes.png'
import sweater from '../../Assets/sweater.png'
// import squiggle from '../../Assets/squigle.png'
function Home() {
  return (
    <div className='px-24 py-3 '>
        <NavBar/>

        <div className='mt-20   flex justify-between'>

        <div className="Left">
          <div className="left  ">

        
          <h2 className='text-5xl '>
          Quality apparel<br/> without the price tag
          </h2>

          <p className='mt-5 text-lg '>No need to spend $xxx on apparel just for the name’s <br/>sake. Our premium apparel is made from the same stuff.</p>

          <div className='mt-8'>
            <button className='bg-orange  py-1 px-6  rounded-xl h-14' > <span className='text-base'>Browse our collection</span></button>

            <button className='inline bg-red-500'><span>Spring ‘23 Collection</span></button>
          </div>

          <div className="flex mt-11 h-36   bg-blue-700 w-auto">
            <h2>50K</h2>
            <p className='text-sm   '>We’re proud to announce that we now <br/> employ a workforce of over 50,000. It’s all <br/> possible because of you.</p>
          </div>

        </div>

        </div>
        <div className=" flex items-center">
          <div className=' mr-7  '>
            <img className='' alt='' src={shoes}></img>
            
              <h1 className='card-zoom-text'>Fauxica Sport</h1>
              <p>Running shoe</p>
           
            
            {/* <img src={squiggle}/> */}
          </div>
          
             <div className=''>
              
                <img alt='' className='mb-7' src={Shirt}/> 
                <img alt='' className='pb-1' src={sweater}/> 
             </div>
        </div>

        </div>
    </div>
  )
}
export default  Home;