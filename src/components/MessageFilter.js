var MessageFilter = ({results, output}) => (

	<div className="input-output">
		<table className="input-messages">
			<tr>
			<td className="input-field">{results[0][0]}</td>
			<td className="input-field">{results[1][0]}</td>
			<td className="input-field">{results[2][0]}</td>
			<td className="input-field">{results[3][0]}</td>
			</tr>
			<tr>
			<td className="input-field">{results[4][0]}</td>
			<td className="input-field">{results[5][0]}</td>
			<td className="input-field">{results[6][0]}</td>
			<td className="input-field">{results[7][0]}</td>
			</tr>
		</table>

		<div className="output-message">
			{output}
		</div>
	</div>
)

MessageFilter.propTypes = {
  results: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.MessageFilter = MessageFilter;
