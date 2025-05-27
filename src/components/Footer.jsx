import React from 'react'
import iconX from '../../public/images/logo-x.svg'
import iconGitHub from '../../public/images/logo-github.svg'
import iconLinkedIn from '../../public/images/logo-linkedin.svg'
import iconFrontEndMentor from '../../public/images/logo-frontend-mentor.svg'

export default function Footer() {
  return (
    <div className='flex justify-between w-full'>
      <p>Made with ❤️ and 🍵</p>
      <div className='flex gap-4 items-center px-2 dark:invert'>
        <img src={iconX} className='w-4 h-4' alt="" />
        <img src={iconGitHub}  className='w-4 h-4' alt="" />
        <img src={iconLinkedIn}  className='w-4 h-4' alt="" />
        <img src={iconFrontEndMentor}  className='w-4 h-4'alt="" />
      </div>
    </div>
  )
}
