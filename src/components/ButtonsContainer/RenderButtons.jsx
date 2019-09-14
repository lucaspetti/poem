import React from 'react';
import LanguageButton from './LanguageButton.jsx'

function RenderButtons(props) {
  const buttons = props.languages.map((language) =>
    <LanguageButton key={language} language={language} />
  );
  return (
    <div id="languages">{buttons}</div>
  );
}

export default RenderButtons;