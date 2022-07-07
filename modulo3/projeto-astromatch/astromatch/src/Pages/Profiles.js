import React from 'react'
import {ContainerProfile, ImageProfile, Infos} from './ProfilesStyled'

const Profiles = (props) => {
  return (
    <div>
        {props.profileUser.photo && props.profileUser.name
                && props.profileUser.age && props.profileUser.bio ?
        (
            <ContainerProfile>
                <ImageProfile src={props.profileUser.photo} alt='Foto do Perfil' />
                <Infos>
                    <h2>{props.profileUser.name}, {props.profileUser.age}</h2>
                    <p>{props.profileUser.bio}</p>
                </Infos>
            </ContainerProfile>
        ) :
        <div>Carregando... </div>
    } 
    </div>
  )
}

export default Profiles