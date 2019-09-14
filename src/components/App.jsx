import React from 'react';
import Header from './Header/Header.jsx'
import ButtonsContainer from './ButtonsContainer/ButtonsContainer.jsx'
import PoemContainer from './PoemContainer/PoemContainer.jsx'

const languages = ['english', 'french', 'spanish', 'german', 'italian', 'portuguese']

function App() {
  return (
    <div>
      <Header title="POEM" />
      <ButtonsContainer id="h-btn-container" languages={languages} />
      <PoemContainer id="poem-container" />
    </div>
  );
}

export default App;