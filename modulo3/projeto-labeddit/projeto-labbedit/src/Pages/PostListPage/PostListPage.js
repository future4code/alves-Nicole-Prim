import React from 'react'
import {useProtectedPage} from '../../Hooks/useProtectedPage'

const PostListPage = () => {
  useProtectedPage()
  return (
    <div>PostListPage

    </div>
  )
}

export default PostListPage