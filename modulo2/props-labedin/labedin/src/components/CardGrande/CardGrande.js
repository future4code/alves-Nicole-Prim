import React from 'react';
import styled from "styled-components";
import {BigCard, BigCardImg, BigCardH, BigCardDiv} from '../styled';

function CardGrande(props) {
    return (
        <BigCard>
            <BigCardImg src={ props.imagem } />
            <BigCardDiv>
                <BigCardH>{ props.nome }</BigCardH>
                <p>{ props.descricao }</p>
            </BigCardDiv>
        </BigCard>
    )
}

export default CardGrande;