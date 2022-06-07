import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './img/imgnic.jpeg';
import flecha from './img/flecha.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import email from './img/email.jpg';
import endereco from './img/endereco.png';
import direito from './img/direito.png';
import cartorio from './img/cartorio.png';
import {Teste} from './components/styled'


function App() {
  return (
    <div className="App">
      <Teste>
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="Nicole Prim" 
          descricao="Oi, eu me chamo Nicole, moro em Porto Belo/SC, tenho 28 anos e sou aluna da Labenu. Fui advogada por 05 anos e espero que muito em breve eu esteja trabalhando como desenvolvedora."
        />
      

        <ImagemButton 
          imagem={flecha}
          texto="Ver mais"
        />
      </Teste>

      <div className="page-section-container">
        <CardPequeno
        iconeum={email}
        email="nicolepprim@gmail.com"
        iconedois={endereco}
        endereco="Porto Belo/SC"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={direito} 
          nome="Advogada" 
          descricao="Advogada autônoma" 
        />
        
        <CardGrande 
          imagem={cartorio}
          nome="Tabelionato" 
          descricao="Atendente" 
        />
      </div>

      <div>
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
