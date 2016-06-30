var Games = (props) => (

	<div className="game-list">
		<div>
		<button className="game" >{props.game.game}</button>
		</div>
		<div>
		<button className="control">send message</button>
		<button className="control">choose random message</button> 
		<button className="control">generate output</button>
		</div>	
	</div>
)

Games.propTypes = {
  game: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Games = Games;