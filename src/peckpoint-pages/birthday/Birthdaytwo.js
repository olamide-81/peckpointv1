import React from 'react'
import top from '../../assets/images/birthday/header.png'
import right from '../../assets/images/birthday/right.png'
import bottom from '../../assets/images/birthday/bottom.png'

const Birthdaytwo = () => {
  return (
    <div className='newtemp-container'>
        <div>
            <img className='top-newtemp' src={top}/>
        </div>
        <div className='middle-section'>
         <div>
          <h5 className='happy-header'> HAPPY BIRTHDAY </h5>
          <h2 className='name-header'> WILLIAMS </h2>
          <p className='name-header'>02/02</p>
          <p className='name-header'>Powered by peckpoint</p>
         </div>
         <div>
             <img className='right-newtemp'  src={right}/>
         </div>
        </div>
        <div>
            <img className='bottom-newtemp'  src={bottom}/>
        </div>
    </div>
  )
}

export default Birthdaytwo