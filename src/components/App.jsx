import Header from './Header.jsx'
import ButtonsContainer from './ButtonsContainer.jsx'
import PoemContainer from './PoemContainer.jsx'

const main = document.getElementById('main');
const languages = ['english', 'french', 'spanish', 'german', 'italian', 'portuguese']

const element = (
  <div>
    <Header title="POEM" />
    <ButtonsContainer id="h-btn-container" languages={languages} />
    <PoemContainer id="poem-container" />
  </div>
)

ReactDOM.render(element, main)