var MessageList = (props) => (

	<div classname="messages-list">
		<Message />
	</div>
)

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.MessageList = MessageList;