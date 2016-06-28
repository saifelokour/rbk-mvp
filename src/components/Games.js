var Games = (props) => (

	<div className="game-list">
		<button className="game" >Game</button>
	</div>
)

Games.propTypes = {
  game: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Games = Games;