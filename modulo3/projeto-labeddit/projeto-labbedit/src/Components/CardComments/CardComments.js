import React from 'react'
import FlechaUm from '../../Assets/cima.svg'
import FlechaDois from '../../Assets/baixo.svg'
import { ContainerPost, Container, Post, Icones, Dados, User, Text } from './Styled'

const CardComments = (props) => {

    const commentsCard = props.comments.map((comment) => {
        return (
            <Container>
                <Post key={comment.id}>
                    <User>Enviado por: {comment.username} </User>
                    <Text> {comment.body} </Text>
                </Post>
                <Icones>
                    <Dados>
                        <img onClick={() => props.voteLike(comment.id)} src={FlechaUm} alt="ícone flecha" />
                        {comment.voteSum}
                        <img onClick={() => props.voteDislike(comment.id)} src={FlechaDois} alt="ícone flecha" />
                    </Dados>
                </Icones>
            </Container>
        )
    })

    return (
        <ContainerPost>
            {commentsCard}
        </ContainerPost>
    )
}

export default CardComments