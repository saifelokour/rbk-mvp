class App extends React.Component {
	
	constructor(props) {
		super(props);

		//this.state = {messages: , message: };
	}  



	render(){
	  return <div>
	    <div className="sector">
	      <MessageList />
	    </div>
	    <div className="sector">
	      <Games />
	    </div>
	    <div className="sector">
	      <MessageFilter />
	    </div>
	  </div>
	}
};


window.App = App;