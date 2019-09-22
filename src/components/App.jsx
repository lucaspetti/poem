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
      language: 'english',
      languages: [],
    }
  }

  componentDidMount() {
    this.setState({
      language: 'english',
      languages: ['english', 'french', 'spanish', 'german', 'italian', 'portuguese'],
      image: process.env.PUBLIC_URL + `/images/covers/img-${this.state.language}.jpg`,
      imageWidth: 672,
      imageHeight: 372,
      data: require(`./../data/${this.state.language}-poems.json`)
    });
  }

  static propTypes = {
    language: PropTypes.string,
    languages: PropTypes.array,
    image: PropTypes.string,
    poem: PropTypes.string,
    author: PropTypes.string,
    data: PropTypes.array
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
    this.clearImage();
    let number = Math.floor(Math.random()*this.state.data.length);
    let sortedPoem = this.state.data[number];
    this.setState ({
      poem: sortedPoem.poem.join('<br />\ '),
      image: sortedPoem.imgSource,
      imageHeight: sortedPoem.imgHeight,
      imageWidth: sortedPoem.imgWidth,
      author: sortedPoem.name
    });
  }

  changeLanguage = (e, newLanguage) => {
    e.preventDefault();
    this.clearImage();
    var newData = require(`./../data/${newLanguage}-poems.json`);
    this.setState ({
      language: newLanguage,
      image: process.env.PUBLIC_URL + `/images/covers/img-${newLanguage}.jpg`,
      data: newData,
      poem: '',
      author: ''
    });
  }

  clearImage() {
    this.setState({
      image: ''
    })
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
          imageSource={this.state.image}
          imageHeight={this.state.imageHeight}
          imageWidth={this.state.imageWidth}
          poem={this.state.poem}
          author={this.state.author}
        />
      </div>
    )
  }
}

export default App;