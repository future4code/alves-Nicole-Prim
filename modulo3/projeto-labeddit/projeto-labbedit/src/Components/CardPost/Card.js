import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPostDetailPage } from '../../Routes/Coordinator'
import { Post, ContainerPost, User, Text, Icones, Container } from './Styled'
import Comentario from '../../Assets/comentarios.svg'
import FlechaUm from '../../Assets/cima.svg'
import FlechaDois from '../../Assets/baixo.svg'
const Card = (props) => {
    const navigate = useNavigate()

    const goTo = (post, id) => {
        localStorage.setItem("post", JSON.stringify(post))
        goToPostDetailPage(navigate, id)
    }


    const postCard = props.posts.map((post) => {
        return (
            <Container>
                <Post key={post.id} onClick={() => goTo(post, post.id)}>
                <User>Enviado por: {post.username} </User>
                <Text> {post.body} </Text>
                </Post>
                <Icones>
                <p>
                    <img src={FlechaUm} alt="ícone flecha" />
                    {post.voteSum}
                    <img src={FlechaDois} alt="ícone flecha" />
                </p>
                <p> <img src={Comentario} alt="ícone comentarios" /> {post.commentCount} </p>
                </Icones>
                </Container>
        )
    })



    return (
        <ContainerPost>{postCard}</ContainerPost>
    )
}

export default Card