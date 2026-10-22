import { Link } from 'react-router'
import type { Post } from '../data/posts'
import LikeButton from './LikeButton'

type PostCardProps = {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <p className="post-date">{post.date}</p>

      <h2>{post.title}</h2>

      <p className="post-excerpt">{post.excerpt}</p>

      <div className="post-tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="post-actions">
        <LikeButton />

        <Link to={`/posts/${post.id}`} className="read-more">
          Read more →
        </Link>
      </div>
    </article>
  )
}

export default PostCard