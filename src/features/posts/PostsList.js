import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const PostsList = () => {
  const posts = useSelector(store => store.posts)

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h2 to={`/post/${post.id}`}>{post.title}</h2>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`}>
        <button>view</button>
      </Link>
    </article>
  ))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}
export default PostsList