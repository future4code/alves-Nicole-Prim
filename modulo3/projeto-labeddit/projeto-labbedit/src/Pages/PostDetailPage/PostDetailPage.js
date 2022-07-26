import React from 'react'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
const PostDetailPage = () => {
    useProtectedPage()
  return (
    <div>PostDetailPage</div>
  )
}

export default PostDetailPage