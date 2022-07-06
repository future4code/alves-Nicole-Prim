import react from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { PROFILES_URL, CHOOSE_URL, CLEAR_URL } from '../Constants/URL'
import Profiles from "./Profiles";

function TelaInicial(props) {
    const [profileUser, setProfileUser] = useState({})


    const getProfileToChoose = () => {
        axios.get(`${PROFILES_URL}`)
            .then((res) => {
                console.log(res)
                setProfileUser(res.data.profile)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const choosePerson = (id) => {
        axios.post(`${CHOOSE_URL}`,
            {
                id: id,
                choice: true
            }).then((response) => {
                if (response.data.isMatch) {
                    alert("Deu match!")
                }
                getProfileToChoose()
            }).catch((error) => {
                console.log(error)
            })
    }


    useEffect(() => {
        getProfileToChoose()
    }, [])



    return (
        <div>
            <h1>Tela inicial</h1>
            <button onClick={() => props.changeScreen("Tela Matches")}>Ir para matches</button>

            {profileUser ? (
                <Profiles
                profileUser={profileUser}
                />
            ) : 
            <div> Uau! Você zerou os perfis. Para começar de novo, limpe os matches.</div>
            }
            <button onClick={() => choosePerson(profileUser.id, false)}> Gostei </button>
                <button onClick={getProfileToChoose}> Não gostei </button> 
        </div>
    );
}

export default TelaInicial;
