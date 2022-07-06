import react from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { PROFILES_URL, CHOOSE_URL } from '../Constants/URL'

function TelaInicial(props) {
    const [profileUser, setProfileUser] = useState({})


    const getProfileToChoose = async () => {
        try {
            const res = await axios.get(`${PROFILES_URL}`)
            setProfileUser(res.data.profile)
        } catch (error) {
            console.log(error.response);
        }
    };

    const choosePerson = async (id, choice) => {
        const body = {
            id: id,
            choice: choice,
        }
        try {
            await axios.post(`${CHOOSE_URL}`, body);
            getProfileToChoose()
            console.log(choosePerson);
        } catch {
            console.log("Error");
        }
       
    };

    useEffect(() => {
        getProfileToChoose();
    }, [])


    return (
        <div>
            <h1>Tela inicial</h1>
            <button onClick={() => props.changeScreen("Tela Matches")}>Ir para matches</button>

            { profileUser ? 
                (
                        <div>
                            <img src={profileUser.photo} alt='Foto do Perfil' />
                            <div>
                                <h2>{profileUser.name}, {profileUser.age}</h2>
                                <p>{profileUser.bio}</p>
                            </div>
                        </div>
                ) :
               <div> lalala </div>
            }



 {/*            {profileUser &&
                <div>
                    <p>   {profileUser.name} </p>
                    <p>  {profileUser.age} </p>
                    <img width={'200rem'} src={profileUser.photo} />
                    <p>  {profileUser.bio} </p>
                </div>
            } */}
        </div>
    );
}

export default TelaInicial;
