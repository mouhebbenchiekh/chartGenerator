import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from '@material-ui/core';
import GenerationBar from './components/GenerationBar';

function App() {
  return (
    <div className="App">
     <Container>
       <GenerationBar/>
     </Container>
    </div>
  );
}

export default App;
