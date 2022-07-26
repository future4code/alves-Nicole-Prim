import React from 'react'
import { BASE_URL } from '../../Constants/urls'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { useRequestData } from '../../Hooks/useRequestData'
import Card from '../../Components/CardPost/Card'
import { useForm } from '../../Hooks/useForm'
import {createPost} from '../../Services/Posts'
import { useState } from 'react'
import LoadingLogin from '../../Assets/loadinglogin.gif'
import Loading from '../../Components/Loading/Loading'

const PostListPage = () => {
  useProtectedPage()
  const [refresh, setRefresh] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const posts = useRequestData([], `${BASE_URL}/posts`, refresh)
  const { form, onChange, cleanFields } = useForm({ title: "", body: "" })

  const onSubmitForm = (event) => {
    event.preventDefault()
    createPost(form, cleanFields, setRefresh, refresh, setIsLoading)
  }

  return (
    <div>
            {posts.length > 0 ? 
            <>
      <form onSubmit={onSubmitForm}>
          <input
            name="title"
            type="text"
            onChange={onChange}
            value={form.title}
            placeholder="Título"
            required
          />
          <input
            name="body"
            type="text"
            onChange={onChange}
            value={form.body}
            placeholder="Escreva seu post..."
            required
          />
          <button type="submit">
          {isLoading? <img width={'30px'} src={LoadingLogin} alt="gif carregando"/> : <>Postar</>}
            </button>
      </form>
      <hr />


      <Card posts={posts}/>
      </>
      : <Loading />
    }
    </div>
  )
}

export default PostListPage