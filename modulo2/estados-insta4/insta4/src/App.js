import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <div>
        <MainContainer>
          <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </MainContainer>
        <MainContainer>
          <Post
            nomeUsuario={'camila'}
            fotoUsuario={'https://picsum.photos/200/300'}
            fotoPost={'https://picsum.photos/200/180'}
          />
        </MainContainer>
        <MainContainer>
          <Post
            nomeUsuario={'anne'}
            fotoUsuario={'https://picsum.photos/3914/2935'}
            fotoPost={'https://picsum.photos/200/160'}
          />
        </MainContainer>
      </div>
    );
  }
}

export default App;
