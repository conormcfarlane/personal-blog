import React from 'react'
import { Link, Links } from 'react-router-dom'
import blogData from '../data/data.json'

export default function Blog() {
  return (
    <div>
      <section className='mb-10'>
         <h1 className='text-3xl mb-1.5 font-bold text-neutral-700'>My Articles</h1>
         <p>Below are my recent blog posts. Click on any title to read the full article.</p>
      </section>
     
      <section className='flex flex-col gap-10 '>
        {blogData.map((post,index) => (
          <div key={index} className='flex flex-col gap-2 border-b border-neutral-200 pb-5'>
            <Link to={`/blog/${post.slug}`} className='text-xl font-bold cursor-pointer hover:underline text-neutral-700'>{post.title}
            </Link>
            <span className='italic'>{post.publishedAt.split('T')[0]}</span>
            <p className='text-lg'>{post.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
