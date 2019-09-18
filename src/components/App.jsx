import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header.jsx'
import LanguageButton from './ButtonsContainer/LanguageButton'
import SortButton from './ButtonsContainer/SortButton'
import PoemContainer from './PoemContainer/PoemContainer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: props.language,
      languages: props.languages
    }
  }

  static propTypes = {
    language: PropTypes.string.isRequired,
    languages: PropTypes.array
  };

  setInstruction = language => {
    if (language === 'english') { return 'Click the button to sort a poem:' }
    else if (language === 'french') { return 'Cliquez sur le bouton pour trier un poème:' }
    else if (language === 'spanish') { return 'Clica al botón para sortear un poema:' }
    else if (language === 'german') { return 'Klicken Sie hier, um ein Gedicht zu sortieren:' }
    else if (language === 'italian') { return 'Fare clic sul pulsante per ordinare una poesia:' }
    else if (language === 'portuguese') { return 'Clique abaixo para sortear um poema:' }
  };

  changeLanguage = (e, newLanguage) => {
    e.preventDefault();
    let language = { ...this.state.language };
    language = newLanguage;
    this.setState ({ language });
  }

  render() {
    return (
      <div>
        <Header title="POEM" />
        <div className="container" id="h-btn-container">
          <div id="languages">
            {this.state.languages.map(language => (
              <LanguageButton
                language={language}
                key={language}
                changeLanguage={this.changeLanguage}
              />
            ))}
          </div>
          <SortButton
            language={this.state.language}
            setInstruction={this.setInstruction}
          />
        </div>
        <PoemContainer id="poem-container" />
      </div>
    )
  }
}

export default App;