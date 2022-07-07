import react from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import { CLEAR_URL, MATCHES_URL } from '../Constants/URL'
import { TbArrowBack } from 'react-icons/tb'
import { ContainerMatches, InfosUser, ButtonDivClear, DivImg, DivAll } from './MatchesStyled'

function TelaMatches(props) {

    const [matchList, setMatchList] = useState([])

    const getMatches = () => {
        axios.get(`${MATCHES_URL}`)
            .then((response) => {
                setMatchList(response.data.matches)
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }

    useEffect(() => {
        getMatches()
    }, [matchList])

    const showMatches = matchList.map((match) => {
        return <div key={match.id}>
            <InfosUser>
                <img src={match.photo} alt='Foto do Perfil' />
                <p>{match.name}</p>
            </InfosUser>
        </div>
    })

    const clear = () => {
        axios.put(`${CLEAR_URL}`)
            .then((response) => {
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const onClickClear = () => {
        clear()
        alert("Começou de novo")
        getMatches()
    }

    return (
        <div>
            <button onClick={() => props.changeScreen("Tela Inicial")}><TbArrowBack /></button>
            <ContainerMatches>
                {showMatches}
            </ContainerMatches>
            <ButtonDivClear>
                <button onClick={onClickClear}>Limpar Matches</button>
            </ButtonDivClear>
        </div>
    );
}

export default TelaMatches;
