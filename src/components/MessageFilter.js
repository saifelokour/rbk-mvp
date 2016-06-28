var MessageFilter = (props) => (

	<div className="input-output">
		<table className="input-messages">
			<tr>
			<td className="input-field">input1</td>
			<td className="input-field">input2</td>
			<td className="input-field">input3</td>
			<td className="input-field">input4</td>
			</tr>
			<tr>
			<td className="input-field">input5</td>
			<td className="input-field">input6</td>
			<td className="input-field">input7</td>
			<td className="input-field">input8</td>
			</tr>
		</table>

		<div className="output-message">
			output test
		</div>
	</div>
)

MessageFilter.propTypes = {
  messages: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.MessageFilter = MessageFilter;
