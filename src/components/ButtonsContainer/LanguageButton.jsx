import React from 'react';

//TODO: include validation
function LanguageButton(props) {
  function changeLanguage(e) {
    e.preventDefault();
		console.log(`You are changing the language to ${props.language}!`);
		// sortBtn.innerHTML = 'Sort';
		// instruction.innerHTML = 'Click the button to sort a poem:';
		// changeLanguage();
		// poemImage.src = 'https://i1.wp.com/artlistr.com/wp-content/uploads/2017/04/Fort-Vimieux-1831-JMW-Turner.jpg';
		// poemImage.height = 372;
		// poemImage.width = 672;
	}

  return (
    <a href="/#" target="_self" onClick={changeLanguage}>
    <img
      id={`${props.language}-btn`}
      src={`/images/icons/${props.language}.png`}
      alt={`${props.language} by corpus delicti from the Noun Project`}
      height="50px" width="50px"
      />
  </a>
  )
}

export default LanguageButton;