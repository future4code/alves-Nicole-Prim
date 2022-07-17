import React from "react";
//Páginas

import { Router } from '../src/Routes/Router'
//styled
import { ContainerApp } from './StyledApp'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <ContainerApp>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router />

    </ContainerApp>
  );
}

export default App;
