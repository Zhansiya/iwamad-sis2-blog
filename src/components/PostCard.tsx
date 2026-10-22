import { Link } from 'react-router'
import type { Post } from '../data/posts'
import LikeButton from './LikeButton'

type PostCardProps = {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  return (
    <article>
      <h2>{post.title}</h2>

      <p>{post.date}</p>

      <p>{post.excerpt}</p>

      <div>
        {post.tags.map((tag) => (
          <span key={tag}>{tag} </span>
        ))}
      </div>

      <LikeButton />
      
      <Link to={`/posts/${post.id}`}>Read more</Link>
    </article>
  )
}

export default PostCard