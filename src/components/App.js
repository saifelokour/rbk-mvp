class App extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			messages: [], 
			results: [["input1"], ["input2"], ["input3"], ["input4"], ["input5"], ["input6"], ["input7"], ["input8"]],
			output: "output",
			lang: 'en'
		};

		//sendMessage(composeMessage({text: "testing"}))


		searchMessages(messages => {
			var log = organizeMessages(messages)
			this.setState({messages: log})
		})
		setInterval(() => {		
			searchMessages(messages => {
				var log = organizeMessages(messages)
				this.setState({messages: log})
				var firstMess = log[0][1]
				if(firstMess.substring(0,10).toLowerCase() === 'translate:'){
					detectLang(firstMess.slice(10), lang => {
						this.setState({lang: lang})
						console.log(lang)
						translateMessage(firstMess.slice(10), this.state.lang, message => {
							this.setState({output: message[0]})
							sendMessage(composeMessage({text: this.state.output}))
						})
					})
				}
		})}, 2000)

	}  

	// generateOutput(){

	// 	var output = '' + this.state.results[0][1] + ' met ' + this.state.results[1][1] + this.state.results[2][1] + 
	// 					'. He said "' + this.state.results[3][1] + '". She said "' +
	// 					this.state.results[4][1] + '". He ' + this.state.results[5][1] + 
	// 					'. She' + this.state.results[6][1] + '. The concequence was ' + this.state.results[7][1] + '';
		
	// 	this.setState({output: output})								
	// }

	render(){
	  return <div>
	    <div className="sector1">
	      <MessageList messages={this.state.messages}/>
	    </div>
	    <div className="sector2">
	      <Games game={{game: "Concequences"}}/>
	    </div>
	    <div className="sector3">
	      <MessageFilter results={this.state.results} output={this.state.output} />
	    </div>
	  </div>
	}
};


window.App = App;