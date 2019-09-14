import React from 'react';

const PoemContainer = (props) => (
  <div className="container" id={props.id}>
		<p id="poem"></p>
		<div id="img-container"></div>
		<p className="poem-author"></p>
	</div>
)

export default PoemContainer;