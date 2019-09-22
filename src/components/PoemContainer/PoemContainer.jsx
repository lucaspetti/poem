import React from 'react';

const PoemContainer = (props) => (
  <div className="container" id="poem-container">
		<p id="poem" dangerouslySetInnerHTML={{__html: props.poem}}></p>
		<div id="img-container">
			<img
				alt={`${props.language}-cover`}
				width={props.imageWidth}
				height={props.imageHeight}
				src={props.imageSource}
			/>
		</div>
		<p className="poem-author font-weight-bold">{props.author}</p>
	</div>
)

export default PoemContainer;