import react from "react";
import { useState } from 'react';


function TelaInicial(props) {

    return (
        <div>
            <h1>Tela inicial</h1>
            <button onClick={() => props.changeScreen("Tela Matches")}>Ir para matches</button>
        </div>
    );
}

export default TelaInicial;
