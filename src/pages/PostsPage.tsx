import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

function PostsPage() {
  return (
    <main>
      <h1>Posts</h1>

      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}

export default PostsPage