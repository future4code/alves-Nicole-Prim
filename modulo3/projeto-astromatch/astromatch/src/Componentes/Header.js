import react from "react";
import TelaInicial from "../Pages/TelaInicial";
import TelaMatches from "../Pages/TelaMatches";
import { useState } from 'react';

function Header() {

  const [screen, setScreen] = useState("Tela Inicial")

  const changeScreen = (choose) => {
    setScreen(choose)
  }

  return (
    <div>

      {screen === "Tela Inicial" ? (
        <TelaInicial screen={screen} changeScreen={changeScreen}/>
      ) : (
        <TelaMatches screen={screen} changeScreen={changeScreen} />
      )}
    </div>
  )
}

export default Header;
