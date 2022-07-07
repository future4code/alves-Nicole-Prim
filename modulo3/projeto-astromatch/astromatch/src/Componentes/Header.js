import react from "react";
import TelaInicial from "../Pages/TelaInicial";
import TelaMatches from "../Pages/TelaMatches";
import { useState } from 'react';
import { Container, DivImg, MaxContainer } from './HeaderStyle'
import Logo from '../Assets/Logo.png'

function Header() {

  const [screen, setScreen] = useState("Tela Inicial")

  const changeScreen = (choose) => {
    setScreen(choose)
  }

  return (
    <MaxContainer>
      <Container>
        <DivImg>
          <img src={Logo} alt='Logo' />
        </DivImg>
        {screen === "Tela Inicial" ? (
          <TelaInicial screen={screen} changeScreen={changeScreen} />
        ) : (
          <TelaMatches screen={screen} changeScreen={changeScreen} />
        )}
      </Container>
    </MaxContainer>
  )
}

export default Header;
