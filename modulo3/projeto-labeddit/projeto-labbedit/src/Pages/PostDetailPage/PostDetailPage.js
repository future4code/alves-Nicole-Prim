import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../Constants/urls'
import {useProtectedPage} from '../../Hooks/useProtectedPage'
import { useRequestData } from '../../Hooks/useRequestData'
import CardComments from '../../Components/CardComments'
const PostDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

    const [post, setPost] = useState({})

    useEffect (() => {
        const postLocal = JSON.parse(localStorage.getItem("post"))
        postLocal && setPost(postLocal)
    }, [])

  return (
    <div>
        <p>Enviado por: {post.username}</p>
        <p>{post.body}</p>
        <h2>Comentários:</h2>
      <CardComments comments={comments} />
    </div>
  )
}

export default PostDetailPage