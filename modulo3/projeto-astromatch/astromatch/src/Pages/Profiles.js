import React from 'react'
import Loading from '../Assets/loader.png'
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
        <div><img src={Loading} alt='gif' /> </div>
    } 
    </div>
  )
}

export default Profiles