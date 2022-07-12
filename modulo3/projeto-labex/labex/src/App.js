import React from "react";
//Páginas
import Header from "./Pages/Header/Header";
import {Router} from '../src/Routes/Router'


function App() {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;
