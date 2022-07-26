import React from 'react'
import { BASE_URL } from '../../Constants/urls'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { useRequestData } from '../../Hooks/useRequestData'
import Card from '../../Components/CardPost/Card'

const PostListPage = () => {
  useProtectedPage()
  const posts = useRequestData([], `${BASE_URL}/posts`)
  console.log(posts)


  return (
    <div>
      <Card posts={posts}/>
    </div>
  )
}

export default PostListPage