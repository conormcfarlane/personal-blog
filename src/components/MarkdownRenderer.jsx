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
            h2: ({children}) => <h2 className='text-2xl font-bold my-3 text-neutral-700 dark:text-neutral-300'>{children}</h2>,
            ol: ({children}) => <ol className='list-decimal list-inside text-neutral-600 dark:text-neutral-400'>{children}</ol>,
            hr: () => <hr className='my-8 border-neutral-300' />,
            ul: ({children}) => <ul className='list-disc list-inside text-neutral-600 dark:text-neutral-400'>{children}</ul> ,
            li: ({children}) => <li className='mb-2'>{children}</li>,
            strong: ({children}) => <strong className='text-neutral-700 dark:text-neutral-300'>{children}</strong>,
            p: ({children}) => <p className='text-neutral-600 dark:text-neutral-400 py-3'>{children}</p>,
            table: ({children}) => <table className=''>{children}</table>,
            tr: ({children}) => <tr className='border'>{children}</tr>,
            th: ({children}) => <th className='border'>{children}</th>,
            td: ({children}) => <td className='border p-1'>{children}</td>,


        }}
        >{content}
        </ReactMarkdown>

        
  )
}
