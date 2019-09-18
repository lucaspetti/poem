import React from 'react';

const PoemContainer = (props) => (
  <div className="container" id="poem-container">
		<p id="poem"></p>
		<div id="img-container">
			<img
				alt={`${props.language}-cover`}
				width="672"
				height="372"
				src={`/images/covers/img-${props.language}.jpg`}
			/>
		</div>
		<p className="poem-author"></p>
	</div>
)

export default PoemContainer;