import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

function PostsPage() {
  return (
    <main>
      <section className="page-heading">
        <p className="eyebrow">MY WRITING</p>
        <h1>Latest Posts</h1>
        <p>
          Thoughts about university, web development, productivity,
          and my learning journey.
        </p>
      </section>

      <section className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  )
}

export default PostsPage