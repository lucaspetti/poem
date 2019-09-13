const main = document.getElementById('main');

const Header = (props) => (
  <header>
    <h1 id="main-title">{props.title}</h1>
  </header>
)

const ButtonsContainer = (props) => (
  <div className="container" id={props.id}>
    <RenderButtons languages={props.languages} />
		<h3 id="instruction">Click the button to sort a poem:</h3>
		<button className="sort-btn">Sort</button>
	</div>
)

function RenderButtons(props) {
  const languages = props.languages;
  const buttons = languages.map((language) =>
    <LanguageButton key={language} language={language} />
  );
  return (
    <div id="languages">{buttons}</div>
  );
}

//TODO: include validation
function LanguageButton(props) {
  return (
    <a href="#" target="_self">
    <img
      id={`${props.language}-btn`}
      src={`css/icons/${props.language}.png`}
      alt={`${props.language} by corpus delicti from the Noun Project`}
      height="50px" width="50px"
      />
  </a>
  )
}

const PoemContainer = (props) => (
  <div className="container" id={props.id}>
		<p id="poem"></p>
		<div id="img-container"></div>
		<p className="poem-author"></p>
	</div>
)

const languages = ['english', 'french', 'spanish', 'german', 'italian', 'portuguese']

const element = (
  <div>
    <Header title="POEM" />
    <ButtonsContainer id="h-btn-container" languages={languages} />
    <PoemContainer id="poem-container" />
  </div>
)

ReactDOM.render(element, main)