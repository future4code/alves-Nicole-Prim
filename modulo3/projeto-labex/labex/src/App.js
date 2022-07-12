import React from "react";
//Páginas
import Header from "./Pages/Header/Header";
import {Router} from '../src/Routes/Router'
//styled
import {ContainerApp} from './StyledApp'


function App() {
  return (
    <ContainerApp>
      <Header />
      <Router />
    </ContainerApp>
  );
}

export default App;
