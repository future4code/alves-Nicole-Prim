import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPostDetailPage } from '../../Routes/Coordinator'

const Card = (props) => {
    const navigate = useNavigate()

    const goTo = (post, id) => {
        localStorage.setItem("post", JSON.stringify(post))
        goToPostDetailPage(navigate, id)
    }


    const postCard = props.posts.map((post) => {
        return (
            <div key={post.id} onClick={() => goTo(post, post.id)}>
                <p>Enviado por: {post.username} </p>
                <p> {post.body} </p>
                <p> {post.voteSum} </p>
                <p> {post.commentCount} </p>
            </div>

        )
    })



    return (
        <div>{postCard}</div>
    )
}

export default Card