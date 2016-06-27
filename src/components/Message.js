var Message = (props) => (

	<div classname="message">
		<div classname="username">username test</div>
		<div classname="text">text test</div>
	</div>
)

Message.propTypes = {
  message: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Message = Message;