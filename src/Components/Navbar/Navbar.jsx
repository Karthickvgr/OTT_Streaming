import React from 'react'
import './Navbar.css'
import SearchIcon from '../../images/Search Vector.png'



const Navbar = () => {
    return (
    <div className='navbar' id='menu'>
        <a href="#" className='logo'>LOGO</a>
        <div className='nav-link'>
           <a href="#" className='home'>Home</a>
           <a href="#" className='tv'>TV Shows</a>
           <a href="#" className='movie'>Movies</a>
           <a href="#" className='live'>Live Shows</a>
        </div>   
           <div className='search-box'>
            <input type="text" placeholder='Search'/>
            <img src={SearchIcon} alt="" />
        </div>
           <button type='button' className='signin'>Sign in</button>
    </div>
  
  )
}

export default Navbar
