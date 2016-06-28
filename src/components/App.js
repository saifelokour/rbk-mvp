class App extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {messages: exampleMessageData};
	}  



	render(){
	  return <div>
	    <div className="sector">
	      <MessageList messages={this.state.messages}/>
	    </div>
	    <div className="sector">
	      <Games game={{game: "Concequences"}}/>
	    </div>
	    <div className="sector">
	      <MessageFilter messages={this.state.messages}/>
	    </div>
	  </div>
	}
};


window.App = App;