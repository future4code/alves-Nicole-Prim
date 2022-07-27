import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../Constants/urls'
import { useProtectedPage } from '../../Hooks/useProtectedPage'
import { useRequestData } from '../../Hooks/useRequestData'
import CardComments from '../../Components/CardComments/CardComments'
import { useForm } from '../../Hooks/useForm'
import { createComment } from '../../Services/Posts'
import LoadingLogin from '../../Assets/loadinglogin.gif'
import Loading from '../../Components/Loading/Loading'
import { Container, Post, User, Text, Icones, Dados } from '../../Components/CardPost/Styled'
import Comentario from '../../Assets/comentarios.svg'
import FlechaUm from '../../Assets/cima.svg'
import FlechaDois from '../../Assets/baixo.svg'
import { ContainerPost } from './Styled'
import Line from '../../Assets/Line.svg'
import { ContainerForm, Inputs, InputDois, ButtonForm, DivLine } from './Styled'

const PostDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const [refresh, setRefresh] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`, refresh)
    const { form, onChange, cleanFields } = useForm({ body: "" })
    const [post, setPost] = useState({})


    useEffect(() => {
        const postLocal = JSON.parse(localStorage.getItem("post"))
        postLocal && setPost(postLocal)
    }, [])

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(form, params.id, cleanFields, setRefresh, refresh, setIsLoading)
    }

    return (
        <>
            {comments ?
                <>
                    <ContainerPost>
                        <Container>
                            <Post>
                                <User>Enviado por: {post.username} </User>
                                <Text> {post.body} </Text>
                            </Post>
                            <Icones>
                                <Dados>
                                    <img src={FlechaUm} alt="ícone flecha" />
                                    {post.voteSum}
                                    <img src={FlechaDois} alt="ícone flecha" />
                                </Dados>
                                <Dados> <img src={Comentario} alt="ícone comentarios" /> {post.commentCount} </Dados>
                            </Icones>
                        </Container>
                    </ContainerPost>
                    <ContainerForm onSubmit={onSubmitForm}>
                        <Inputs>
                            <InputDois
                                name="body"
                                type="text"
                                onChange={onChange}
                                value={form.body}
                                placeholder="Adicionar comentário"
                                required
                            />
                        </Inputs>
                        <ButtonForm>
                            <button type="submit">
                                {isLoading ? <img width={'30px'} src={LoadingLogin} alt="gif carregando" /> : <>Responder</>}
                            </button>
                        </ButtonForm>
                    </ContainerForm>
                    <DivLine>
                        <img src={Line} alt="linha" />
                    </DivLine>
                    <CardComments comments={comments} />
                </>

                : <Loading />
            }
        </>
    )
}

export default PostDetailPage