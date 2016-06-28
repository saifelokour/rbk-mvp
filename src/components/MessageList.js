var MessageList = (props) => (

	<div className="messages-list">
		{props.messages.map(message => <Message message={message}/> )}
	</div>
)

MessageList.propTypes = {
  messages: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.MessageList = MessageList;