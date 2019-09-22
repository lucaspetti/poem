import React from 'react';
import PropTypes from "prop-types";

class SortButton extends React.Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    setInstruction: PropTypes.func
  };

  renderInstructions(language, text) {
    const instructions = {
      english: { innerText: 'Sort', instruction: 'Click the button to sort a poem:' },
      french: { innerText: 'Trier', instruction: 'Cliquez sur le bouton pour trier un poème:' },
      spanish: { innerText: 'Sortear', instruction: 'Clica al botón para sortear un poema:' },
      german: { innerText: 'Sortieren', instruction: 'Klicken Sie hier, um ein Gedicht zu sortieren:' },
      italian: { innerText: 'Assortire', instruction: 'Fare clic sul pulsante per ordinare una poesia' },
      portuguese: { innerText: 'Sortear', instruction: 'Clique abaixo para sortear um poema:' }
    }

    return instructions[language][text]
  }

  render() {
    return (
      <div className="container">
        <h3 id="instruction">
          {this.renderInstructions(this.props.language, 'instruction')}
        </h3>
        <button
          className="sort-btn"
          onClick={(e) => {
            this.props.sortPoem(e)
          }}>
          {this.renderInstructions(this.props.language, 'innerText')}
        </button>
      </div>
    )
  }
}



export default SortButton;