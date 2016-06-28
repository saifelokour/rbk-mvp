var Message = (props) => (

	<div className="message">
		<div className="username">@{props.message[0]}</div>
		<div className="text">{props.message[1]}</div>
		<div className="time-stamp">{props.message[2]}</div>
	</div>
)

Message.propTypes = {
  message: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Message = Message;