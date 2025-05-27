import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import avatarImg from '../../public/images/image-avatar.jpg'
import moonIcon from '../../public/images/icon-moon.svg'
import sunIcon from '../../public/images/icon-sun.svg'
import iconMenu from '../../public/images/icon-menu.svg'
import menuClose from '../../public/images/icon-menu-close.svg'


export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenuOpen = () => {
      setMenuOpen(prevMode => !prevMode)
      console.log(menuOpen)
    }
    const [isDarkMode,setIsDarkMode] = useState(false)
    const handleDarkModeToggle = () => {
      document.documentElement.classList.toggle('dark')
      setIsDarkMode(prevMode => !prevMode)
      console.log(isDarkMode)
    }
  return (
    <div className='flex flex-col gap-3'>
    <nav className='flex justify-between p-1.5 items-center bg-white rounded-lg relative w-full border-1 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-900'>
        <img src={avatarImg} className='h-10 w-10 rounded-lg'
        alt="User Avatar Image" />
        
        <div className='flex items-center gap-2 md:gap-5'>
            {/* Tablet + Desktop */}
            <div className='hidden md:flex gap-6 items-center dark:text-neutral-400'>
              <Link to={'/'}>Home</Link>
              <Link to={'/blog'}>Blog</Link>
              <Link to={'/about'}>About</Link>
              <Link to={'/newsletter'}>Newsletter</Link>
            </div>
            {/* Mobile Burger */}
            <div className='md:hidden'>
              <button onClick={handleMenuOpen} className={`w-10 h-10 flex justify-center items-center rounded-lg cursor-pointer ${menuOpen ? 'bg-black' : '' }`}>
               {!menuOpen ? (
                <img src={iconMenu} alt="" className='dark:invert' />
               ) : (
                <img src={menuClose} alt="" className='h-5' />
               )}
              </button>
            </div>
           
            {/* Mobile Toggle Menu */}
            
          <button className='bg-white rounded-lg h-10 w-10 flex items-center justify-center cursor-pointer dark:bg-black'
          onClick={handleDarkModeToggle}>
            <img src={isDarkMode ? moonIcon : sunIcon}  className="h-4" alt="" />
          </button>
          
        </div>
        
    </nav>

    {menuOpen && (
        <div className=" w-full shadow-md flex flex-col items-left gap-4 p-4 rounded-lg md:hidden bg-white dark:bg-black">
          <Link to="/" className="" onClick={handleMenuOpen}>Home</Link>
          <Link to="/blog" className="" onClick={handleMenuOpen}>Blog</Link>
          <Link to="/about" className="" onClick={handleMenuOpen}>About</Link>
          <Link to="/newsletter" className="" onClick={handleMenuOpen}>Newsletter</Link>
        </div>
      )}
    </div>
    
  )
}
