class App extends React.Component {
	
	constructor(props) {
		super(props);

		//this.state = {messages: , message: };
	}  



	render(){
	  return <div>
	    <div className="col-md-11">
	      <MessageList />
	    </div>
	    <div className="col-md-7">
	      <Games />
	    </div>
	    <div className="col-md-5">
	      <MessageFilter />
	    </div>
	  </div>
	}
};


window.App = App;