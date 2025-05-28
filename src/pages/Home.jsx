import React from 'react'
import logoFrontend from '../../public/images/logo-frontend-mentor.svg'
import logoGithub from '../../public/images/logo-github.svg'
import logoLinkedIn from '../../public/images/logo-linkedin.svg'
import logoX from '../../public/images/logo-x.svg'
import blogData from '../data/data.json'
import { Link } from 'react-router-dom'
import formatDate from '../utils/formatDate'

const logos = [
  {src: logoX, alt: "x"},
  {src: logoGithub, alt: "Github"},
  {src: logoLinkedIn, alt: "LinkedIn"},
  {src: logoFrontend, alt: "Front End Mentor"}
]

export default function Home() {
  return (
    <div>
      <section className='flex flex-col gap-6 pb-8 border-b-1 border-neutral-300'>
        <h1 className='text-3xl relative w-fit dark:text-white '>
          <span className='absolute bg-blue-400 h-[30%] w-full left-0 bottom-0 z-0'></span>
          <span className='relative z-10'>Hi, I'm Paulina 👋</span>
        </h1>
        <p>
          I'm on a jorney to become a front-end web developer. I love building little projects, trying out new cosing techniques, and sharing what i learn along the way. Whne I'm not at my desk, you'll find me reading, hiking through the mountains, or challenging myself on rock-climbing walls.</p>
        <p>
          I started this blog to document my progress, keepy myself accountable, and hopefully inspire anyone else who's learning code. Welcome to my corner of the internet, and thanks for stopping by!
        </p>
        <div className='flex gap-4'>
          {logos.map((logo,index) => (
            <button key={logo.alt} className='bg-white h-10 w-10 flex justify-center items-center rounded-lg cursor-pointer'>
              <img src={logo.src} alt={logo.alt} className='h-4 w-4' />
            </button>
          ))}

        </div>
      </section>
      <section className='flex flex-col gap-5 pt-8'>
       <div className='flex gap-1 items-end'>
        <h2 className='text-3xl font-bold '>Latest Articles</h2>
        <div className="w-1/7 h-1 bg-blue-500 rounded ml-4 mb-2" />
       </div>
      
        {blogData.slice(0,4).map((post,index) => (
          <div key={post.slug}>
            <Link to={`/blog/${post.slug}`} className='text-xl font-bold cursor-pointer hover:underline dark:hover:decoration-white text-neutral-700 dark:text-white'>{post.title}
            </Link>
            <p className='italic dark:text-neutral-500'>{formatDate(post.publishedAt)}</p>
          </div>
        ))}
        <Link to={"/blog"}>
        <p className='underline decoration-2 decoration-blue-400'>View all articles</p>
        </Link>
      </section>
      
    </div>
  )
}
