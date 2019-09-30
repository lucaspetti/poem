import React from 'react';
import PropTypes from 'prop-types';
class LanguageButton extends React.Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    changeLanguage: PropTypes.func.isRequired
  }

  render() {
    return (
      <a href="/#" target="_self" onClick={(e) => {
        this.props.changeLanguage(e, this.props.language)
      }}>
      <img
        id={`${this.props.language}-btn`}
        src={process.env.PUBLIC_URL + `/images/icons/${this.props.language}.png`}
        alt={`${this.props.language} by corpus delicti from the Noun Project`}
        height="50px" width="50px"
        />
    </a>
    )
  }
}

export default LanguageButton;