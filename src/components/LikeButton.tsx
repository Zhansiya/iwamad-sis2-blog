import { useState } from 'react'

function LikeButton() {
  const [likes, setLikes] = useState(0)

  function handleLike() {
    setLikes((currentLikes) => currentLikes + 1)
  }

  return (
    <button type="button" onClick={handleLike}>
      Like {likes}
    </button>
  )
}

export default LikeButton