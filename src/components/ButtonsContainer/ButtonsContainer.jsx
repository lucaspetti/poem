import React from 'react';
import RenderButtons from './RenderButtons.jsx'

const ButtonsContainer = (props) => (
  <div className="container" id={props.id}>
    <RenderButtons languages={props.languages} />
		<h3 id="instruction">Click the button to sort a poem:</h3>
		<button className="sort-btn">Sort</button>
	</div>
)

export default ButtonsContainer;