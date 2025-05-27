import React from 'react'
import workSpaceSmall from '../../public/images/image-workspace-small.jpg'
import workSpaceLarge from '../../public/images/image-workspace-large.jpg'

export default function About() {
  return (
    <div className='flex flex-col gap-6 dark:text-neutral-400'>
      <h2 className='font-bold text-3xl dark:text-white'>About Me</h2>
      <section className='flex flex-col gap-6'>
         <p>Hi, I'm Paulina! Ever since I can remember, I've had a passion for creativity and problem-solving. That's what led me to the world of front-end web development. There's something magical about seeing an idea come to life in the browser—whether it's a simple layout experiment or a complex interface for a bigger project.
      </p> 

      <p>When I'm not coding, I love getting lost in a good book. My taste is pretty eclectic: I'll happily read everything from fantasy novels to biographies of tech pioneers. Reading helps me unwind and often sparks new ideas for my coding projects.
      </p>

      <p> Another big passion of mine is the great outdoors. Hiking allows me to disconnect from the digital world and reconnect with nature. I love challenging hikes with rewarding views at the top. And if I'm not on the trails, you might catch me rock climbing. The combination of mental focus and physical endurance is a perfect parallel to tackling tough coding challenges! 
      </p>

      <p> Some of my favorite books: 
        <ul>
          <li><span className='font-bold'>“The Pragmatic Programmer”</span> by Andrew Hunt and David Thomas (for helpful insights into software development)</li>
          <li> <span  className='font-bold'>“Ready Player One”</span> by Ernest Cline (for some futuristic escapism) “The Hobbit” by J.R.R. Tolkien (for a bit of fantasy fun) </li>
          <li><span  className='font-bold'>“Educated”</span> by Tara Westover (for incredible inspiration)</li>
        </ul>
        
      </p>
      <div className='flex flex-col gap-6'>
        <p>
         I absolutely love my workspace as a place that inspires me to do my best work, so I thought I'd share it with you: 
        </p>
        <picture className=''>
          <source media='min-width:768px' srcSet={workSpaceLarge} className='rounded-lg' />
          <img src={workSpaceSmall} className='rounded-lg' alt="" />
        </picture>
        
      </div>
      
      
     
       <p>I hope this blog not only documents my growth but also helps others see that coding can be for everyone. Thanks for joining me on this journey!</p>
      </section>
     
    </div>
  )
}
