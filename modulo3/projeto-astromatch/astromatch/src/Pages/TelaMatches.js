import react from "react";
import { useState } from 'react';

function TelaMatches(props) {
    return (
        <div>
            <h1>Tela Matches</h1>
            <button onClick={() => props.changeScreen("Tela Inicial")}>Ir para perfis</button>
        </div>
    );
}

export default TelaMatches;
