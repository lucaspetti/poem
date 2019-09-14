import React from 'react';

const ButtonsContainer = (props) => (
  <div className="container" id={props.id}>
    <RenderButtons languages={props.languages} />
		<h3 id="instruction">Click the button to sort a poem:</h3>
		<button className="sort-btn">Sort</button>
	</div>
)

function RenderButtons(props) {
  const buttons = props.languages.map((language) =>
    <LanguageButton key={language} language={language} />
  );
  return (
    <div id="languages">{buttons}</div>
  );
}

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

export default ButtonsContainer;