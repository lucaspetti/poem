import React from 'react';
import PropTypes from 'prop-types';

//TODO: include validation
class LanguageButton extends React.Component {
  static propTypes = {
    language: PropTypes.string,
    changeLanguage: PropTypes.func
  }

  render() {
    return (
      <a href="/#" target="_self" onClick={(e) => {
        this.props.changeLanguage(e, this.props.language)
      }}>
      <img
        id={`${this.props.language}-btn`}
        src={`/images/icons/${this.props.language}.png`}
        alt={`${this.props.language} by corpus delicti from the Noun Project`}
        height="50px" width="50px"
        />
    </a>
    )
  }
}

export default LanguageButton;