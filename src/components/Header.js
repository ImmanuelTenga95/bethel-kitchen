import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {ImLocation} from 'react-icons/im'

function Header() {
  return (
    <div className='bethel__header-content'>
      <div className='bethel__header-right-content'>
        <h1 style={{color:'#fff', fontWeight:'700'}}>Are you starving?</h1>
        <p style={{marginTop:'20px', color:'#504F4F', fontWeight:'700'}}>Within a few clicks, find meals that are accesible near you.</p>
        <div className='bethel__header-right-content-address'>
            <input type='checkbox' value='Delivery' className='behtel__header-input-hidden'/>
            <label style={{color:'#fff'}}>Delivery</label>
            <input type='checkbox' value='Pickup' className='behtel__header-input-hidden'/>
            <label style={{color:'#fff'}}>Pickup</label><br></br>
            <>
            <ImLocation style={{color:'#FF7A7A', position:'absolute', marginTop:'48px'}}/>
            <input className='bethel__header-input-address' type='text' placeholder='Enter your Address' style={{marginTop:'40px', width:'70%', height:'31px', border:'2px solid #F5F1F0', padding:'0 15px', outline:'none'}}/> 
            </>
          <button style={{padding:'8px 10px', backgroundColor:'#FF7A7A', border:'none', color:'#fff', fontWeight:'300', cursor:'pointer', borderRadius:'0 5px 5px 0'}}><FaSearch style={{width:'10px', height:'10px'}} /> Find Food</button>
          
        </div>

      </div>
      <div className='bethel__header-left-image'>
      </div>
    </div>
  )
}

export default Header