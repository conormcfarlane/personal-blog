import React from 'react'
import blogData from '../data/data.json'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function MarkdownRenderer({content}) {
  return (
    <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        components={{
            h2: ({children}) => <h2 className='text-2xl font-bold my-3 text-neutral-700'>{children}</h2>,
            ol: ({children}) => <ol className='list-decimal list-inside text-neutral-600'>{children}</ol>,
            hr: () => <hr className='my-8 border-neutral-300' />,
            ul: ({children}) => <ul className='list-disc list-inside text-neutral-600'>{children}</ul> ,
            li: ({children}) => <li className='mb-2'>{children}</li>,
            strong: ({children}) => <strong className='text-neutral-700'>{children}</strong>,
            p: ({children}) => <p className='text-neutral-600'>{children}</p>

        }}
        >{content}
        </ReactMarkdown>

        
  )
}
