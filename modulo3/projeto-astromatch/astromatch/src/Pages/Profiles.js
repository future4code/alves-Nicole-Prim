import React from 'react'
import Loading from '../Assets/loader.png'

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
        <div><img src={Loading} alt='gif' /> </div>
    } 
    </div>
  )
}

export default Profiles