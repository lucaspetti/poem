import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header'
import LanguageButton from './LanguageButton/LanguageButton'
import SortButton from './SortButton/SortButton'
import PoemContainer from './PoemContainer/PoemContainer'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'english',
      languages: []
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

  sortPoem = (e) => {
    e.preventDefault();
    this.clearImage();
    let number = Math.floor(Math.random()*this.state.data.length);
    let sortedPoem = this.state.data[number];
    this.setState ({
      poem: sortedPoem.poem.join('<br /> '),
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