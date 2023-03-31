import {React, useState}  from 'react'
import {BsPersonFill} from 'react-icons/bs'
import {FaSearch} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdCloseCircle} from 'react-icons/io'


function Navbar() {
  
  const [toggleMenu, setToggleMenu] = useState(false)

  const butttonToggled = ()=>{
    setToggleMenu(!toggleMenu)
  }
  return (

    <div className='bethel__navbar-content'>
            <p style={{color:'#000', fontWeight:'800', textTransform:'uppercase'}}>Bethel <span style={{color:'crimson'}}>Kitchen</span></p>

            <nav className={toggleMenu?'show':'show-hidden'}>
                <ul>
                    <a href='#'onClick={butttonToggled}>Home</a>
                    <a href='#'onClick={butttonToggled}>Order</a>
                    <a href='#'onClick={butttonToggled}>Contacts</a>
                </ul>
            </nav>
            <div className='bethel__navbar-list-left'>
                <>
                <FaSearch className='search' style={{width:'10px', height:'10px', position:'absolute', top:'20px', right:'19%'}} />
                <input placeholder='Search Food' type='text' style={{marginRight:'15px',padding:'0 20px', height:'28px'}} />
                </>
                <button type='submit'><BsPersonFill style={{height:'10px', width:'10px'}}/> Login</button>
            </div>
                <button className='toggle-button' onClick={butttonToggled}>
                  {!toggleMenu?
                    <GiHamburgerMenu />:<IoMdCloseCircle/>
                  }
                </button>
        
    </div>
  )
}

export default Navbar