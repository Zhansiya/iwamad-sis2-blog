import { Link, useParams } from 'react-router'
import { posts } from '../data/posts'
import LikeButton from '../components/LikeButton'

function PostPage() {
  const { id } = useParams()

  const post = posts.find((post) => post.id === Number(id))

  if (!post) {
    return (
      <main>
        <section className="not-found">
          <p className="error-code">POST NOT FOUND</p>

          <h1>This post doesn't exist.</h1>

          <p>
            The post you are looking for may have been removed or the link
            may be incorrect.
          </p>

          <Link to="/posts" className="primary-button">
            Back to Posts
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main>
      <article className="post-page">
        <Link to="/posts" className="back-link">
          ← Back to Posts
        </Link>

        <header className="post-header">
          <p className="post-date">{post.date}</p>

          <h1>{post.title}</h1>

          <div className="post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="post-content">
          <p>{post.content}</p>
        </div>

        <div className="post-footer">
          <p>Enjoyed this post?</p>
          <LikeButton />
        </div>
      </article>
    </main>
  )
}

export default PostPage