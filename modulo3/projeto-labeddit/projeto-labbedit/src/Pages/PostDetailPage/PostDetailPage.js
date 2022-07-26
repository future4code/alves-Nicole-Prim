import React from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../Constants/urls'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import { useRequestData } from '../../Hooks/useRequestData'
import CardComments from '../../Components/CardComments'
const PostDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    console.log(comments)
  return (
    <div>
      <CardComments comments={comments} />
    </div>
  )
}

export default PostDetailPage