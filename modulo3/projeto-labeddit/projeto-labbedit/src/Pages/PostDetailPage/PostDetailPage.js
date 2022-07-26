import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../Constants/urls'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { useRequestData } from '../../Hooks/useRequestData'
import CardComments from '../../Components/CardComments/CardComments'
import { useForm } from '../../Hooks/useForm'
import axios from 'axios'
const PostDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    const { form, onChange, cleanFields } = useForm({ body: "" })
    const [post, setPost] = useState({})

    useEffect(() => {
        const postLocal = JSON.parse(localStorage.getItem("post"))
        postLocal && setPost(postLocal)
    }, [])

    const onSubmitForm = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}/posts/${params.id}/comments`, form, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((res) => {
            console.log(res)
            cleanFields()
        }).catch((err) => {
            console.log(err.response)
          })
      }

    return (
        <div>
            <p>Enviado por: {post.username}</p>
            <p>{post.body}</p>
            <form onSubmit={onSubmitForm}>
                <input
                    name="body"
                    type="text"
                    onChange={onChange}
                    value={form.body}
                    placeholder="Adicionar comentário"
                    required
                />
                <button type="submit">Responder</button>
            </form>
            <h2>Comentários:</h2>
            <CardComments comments={comments} />
        </div>
    )
}

export default PostDetailPage