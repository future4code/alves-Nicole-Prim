import React from 'react'

const Profiles = (props) => {
  return (
    <div>
        {props.profileUser.photo && props.profileUser.name
                && props.profileUser.age && props.profileUser.bio ?
        (
            <div>
                <img width={'100rem'} src={props.profileUser.photo} alt='Foto do Perfil' />
                <div>
                    <h2>{props.profileUser.name}, {props.profileUser.age}</h2>
                    <p>{props.profileUser.bio}</p>
                </div>
            </div>
        ) :
        <div> carregando... </div>
    } 
    </div>
  )
}

export default Profiles