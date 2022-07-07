import react from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { PROFILES_URL, CHOOSE_URL, CLEAR_URL } from '../Constants/URL'
import Profiles from "./Profiles";
import {IoMdHeartDislike} from 'react-icons/io'
import {IoMdHeart} from 'react-icons/io'
import {RiChatSmile2Line} from 'react-icons/ri'
import { DivButtons, ButtonMatches, MatchesDiv, ButtonDislike, ButtonLike } from '../Componentes/HeaderStyle'
import Matches from '../Assets/matches.png'

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
            <MatchesDiv>
            <ButtonMatches onClick={() => props.changeScreen("Tela Matches")}><RiChatSmile2Line/></ButtonMatches>
            </MatchesDiv>
            {profileUser ? (
                <Profiles
                    profileUser={profileUser}
                />
            ) :
                <div> Uau! Você zerou os perfis. Para começar de novo, limpe os matches.</div>
            }
            <DivButtons>
            <ButtonDislike onClick={getProfileToChoose}> <IoMdHeartDislike/> </ButtonDislike>
            <ButtonLike onClick={() => choosePerson(profileUser.id, false)}> <IoMdHeart/> </ButtonLike>
            </DivButtons>
        </div>
    );
}

export default TelaInicial;