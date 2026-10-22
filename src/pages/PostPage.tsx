import { Link, useParams } from 'react-router'
import { posts } from '../data/posts'
import LikeButton from '../components/LikeButton'

function PostPage() {
  const { id } = useParams()

  const post = posts.find((post) => post.id === Number(id))

  if (!post) {
    return (
      <main>
        <h1>Post not found</h1>
        <p>The post you are looking for does not exist.</p>
        <Link to="/posts">Back to Posts</Link>
      </main>
    )
  }

  return (
    <main>
      <article>
        <h1>{post.title}</h1>

        <p>{post.date}</p>

        <div>
          {post.tags.map((tag) => (
            <span key={tag}>{tag} </span>
          ))}
        </div>

        <LikeButton />
        
        <p>{post.content}</p>

        <Link to="/posts">Back to Posts</Link>
      </article>
    </main>
  )
}

export default PostPage