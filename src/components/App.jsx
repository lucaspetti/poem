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
      language: '',
      languages: [],
      poem: '',
      author: ''
    }
  }

  componentDidMount() {
    this.setState({
      language: 'english',
      languages: ['english', 'french', 'spanish', 'german', 'italian', 'portuguese'],
      poem: '',
      author: ''
    })
  }

  static propTypes = {
    language: PropTypes.string,
    poem: PropTypes.string,
    author: PropTypes.string,
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

  sortPoem = (e, language) => {
    e.preventDefault();
    console.log(`Sorting a poem in ${language}...`);
    let poem = { ...this.state.poem };
    let author = { ...this.state.author};
    poem = 'New Sorted Poem';
    author = 'E.E. Cummings';
    this.setState ({ poem, author });
  }

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
            sortPoem={this.sortPoem}
          />
        </div>
        <PoemContainer
          language={this.state.language}
          imageSource={`/images/covers/img-${this.state.language}.jpg`}
          poem={this.state.poem}
          author={this.state.author}
        />
      </div>
    )
  }
}

export default App;