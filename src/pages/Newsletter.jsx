import React, { useState } from 'react'
import iconError from '../../public/images/icon-error.svg'
import iconSuccess from '../../public/images/icon-success.svg'

export default function Newsletter() {

  const [email,setEmail] = useState('')
  const [error, setError] =useState('')
  const [success,setSuccess] = useState('')

  const validateEmail = (email) => {
     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!validateEmail(email)){
      setError('Please enter a valid email !')
    }else{
      setSuccess('Your subsribed! Please check your inbox')
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='font-bold text-3xl'>Newsletter</h2>
      <p className='text-xl'>Want to stay updated on my latest articles, coding tutorials, and personal adventures? Sign up for my newsletter! It's a simple way to keep trck of new pots and occasional coding tips I discover. Just drop your email in the sign-up box, and I'll send you updates whener there's something new to share.
     </p>
     <span className='font-bold text-[20px]'>I'd love to have you along for the ride and also to hear about your own journey!
     </span>
     <form className='flex flex-col' onSubmit={handleSubmit}>
       <label htmlFor="email" className='block'>Email Address</label>
      <input 
      type="email"
       placeholder='email@example.com' 
       className={`w-full bg-white p-2 rounded-lg border cursor-pointer
        ${error ? 'border-red-500' : success ? 'border-green-500' : 'border-neutral-500'}  `}
       value={email}
       onChange={e => {
        setEmail(e.target.value);
        setError('');
        setSuccess('');
        }}/>
       {error && <div className='flex gap-2 items-center'><img src={iconError} alt="" className='h-4' /> <span className='text-red-500 '>{error}</span></div> }
       {success && <div className='flex gap-2 items-center'><img src={iconSuccess} alt="" /> <span className='text-green-600'>{success}</span></div>}
      <button className='bg-blue-300 rounded-lg px-5 py-2 max-w-fit my-3 font-semibold cursor-pointer'>Stay updated</button>
      <p>Unsubscribe anytime. No spam. I promise :L </p>
     </form>
     
    </div>
  )
}
