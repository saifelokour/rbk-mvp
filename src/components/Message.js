var Message = (props) => (

	<div className="message">
		<div className="username">username</div>
		<div className="text">text</div>
	</div>
)

Message.propTypes = {
  message: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Message = Message;