import React from 'react'

const CardComments = (props) => {

    const commentsCard = props.comments.map((comment) => {
        return (
            <div key={comment.id}>
                <p>Enviado por: {comment.username} </p>
                <p> {comment.body} </p>
                <p> {comment.voteSum} </p>
            </div>

        )
    })

    return (
        <div>
            {commentsCard}
        </div>
    )
}

export default CardComments