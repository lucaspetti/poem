import React from 'react';

const PoemContainer = (props) => (
  <div className="container" id="poem-container">
		<p id="poem" dangerouslySetInnerHTML={{__html: props.poem}}></p>
		<div id="img-container">
			<img
				alt={`${props.language}-cover`}
				width="672"
				height="372"
				src={props.imageSource}
			/>
		</div>
		<p className="poem-author">{props.author}</p>
	</div>
)

export default PoemContainer;