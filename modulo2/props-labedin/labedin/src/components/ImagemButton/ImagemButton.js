import React from 'react';
import styled from "styled-components";
import {ButtonPage, ButtonImg} from '../styled';

function ImagemButton(props) {
    return (
        <ButtonPage>
            <ButtonImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ButtonPage>

    )
}

export default ImagemButton;