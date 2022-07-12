import React from "react";
//Páginas

import {Router} from '../src/Routes/Router'
//styled
import {ContainerApp} from './StyledApp'


function App() {
  return (
    <ContainerApp>
      <Router />
    </ContainerApp>
  );
}

export default App;
