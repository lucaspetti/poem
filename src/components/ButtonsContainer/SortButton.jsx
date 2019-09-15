import React from 'react';
import PropTypes from "prop-types";

class SortButton extends React.Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    setInstruction: PropTypes.func
  };

  innerText = (language) => {
    if (language === 'english') { return 'Sort' }
    else if (language === 'french') { return 'Trier' }
    else if (language === 'spanish') { return 'Sortear' }
    else if (language === 'german') { return 'Sortieren' }
    else if (language === 'italian') { return 'Assortire' }
    else if (language === 'portuguese') { return 'Sortear' }
  }

  render() {
    return (
      <div>
        <h3 id="instruction">
          {this.props.setInstruction(this.props.language)}
        </h3>
        <button className="sort-btn">{this.innerText(this.props.language)}</button>
      </div>
    )
  }
}



export default SortButton;