const ButtonsContainer = (props) => (
  <div className="container" id="h-btn-container">
		<div id="languages">
			<a href="#" target="_self"><img src="css/icons/english.png" alt="English by corpus delicti from the Noun Project" height="50px" width="50px" id="english-btn" /></a>
			<a href="#" target="_self"><img src="css/icons/french.png" alt="French by corpus delicti from the Noun Project" height="50px" width="50px" id="french-btn" /></a>
			<a href="#"><img src="css/icons/spanish.png" alt="Spanish by corpus delicti from the Noun Project" height="50px" width="50px" id="spanish-btn" /></a>
			<a href="#"><img src="css/icons/german.png" alt="German by corpus delicti from the Noun Project" height="50px" width="50px" id="german-btn" /></a>
			<a href="#"><img src="css/icons/italian.png" alt="Italian by corpus delicti from the Noun Project" height="50px" width="50px" id="italian-btn" /></a>
			<a href="#"><img src="css/icons/portuguese.png" alt="Portuguese by corpus delicti from the Noun Project" height="50px" width="50px" id="portuguese-btn" /></a>
		</div>
		<h3 id="instruction">Click the button to sort a poem:</h3>
		<button className="sort-btn">Sort</button>
	</div>
)