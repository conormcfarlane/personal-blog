import React from 'react'
import { useParams } from 'react-router-dom'
import blogData from '../data/data.json'
import MarkdownRenderer from '../components/MarkdownRenderer'

export default function BlogPost() {
    const {slug} = useParams()
    const post = blogData.find(p => p.slug === slug)
  return (
    <div>
         <h1 className="text-3xl font-bold">{post.title}</h1>
         <span className="italic block my-3">Published {post.publishedAt?.split('T')[0]}</span>
        <MarkdownRenderer content={post.content} />
    </div>
  )
}
