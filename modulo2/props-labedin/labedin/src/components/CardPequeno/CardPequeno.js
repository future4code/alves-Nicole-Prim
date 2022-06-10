import React from 'react';
import styled from "styled-components";
import {SmallCard, SmallCardImg} from '../styled';

function CardPequeno(props) {
    return (
        <div>
            <SmallCard>
                <SmallCardImg src={ props.iconeum }/>
                <p>E-mail: { props.email }</p>
            </SmallCard>
            <SmallCard>
                <imSmallCardImgg src={ props.iconedois }/>
                <p>Endereço: { props.endereco }</p>
            </SmallCard>
        </div>
    )
}

export default CardPequeno;