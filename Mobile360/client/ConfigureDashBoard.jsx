ConfigureDashBoard = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData() {
	    return {
	    	currentUser: Meteor.user(), 
	    	availableBoards: Boards.find().fetch()
	    	//availableBoards: this.getAvailableBoardsData()
    	};
  	},

  	getAvailableBoardsData() {
  		console.log("Client..Before getMeteorData get data");

		var availableBoards = {};
		availableBoards = Boards.find().fetch();
		/*Meteor.call('getAvailableBoardsSync', function(error, result) {
			console.log("Got response from server call : " + result);
			availableBoards = result;
		});*/

		console.log("Client..After getMeteorData get data " + availableBoards);

		return availableBoards;
  	},

  	componentWillMount() {
  		console.log("componentWillMount..Start");
    	/*this.availableBoards = this.getAvailableBoardsData();
    	console.log("componentWillMount..After getAvailableBoardsData call" + this.availableBoards);
    	this.setState({ availableBoards: this.availableBoards });*/
    	console.log("componentWillMount..End");
  	},


	render() {
		console.log('ConfigureDashBoard - Available dashboards : ');
    	console.log(this.data.availableBoards);

		return(
			<div className="eq-m-boards">
				<div className="eq-m-welcome-head">
					<h1>Welcome !</h1>
					<p>Welcome to Equinix Mobile 360 App.</p>

					<BoardTitle data={this.data.availableBoards} />
				</div>
				<Board data={this.data.availableBoards} />
			</div>
		);
	}
})

BoardTitle = React.createClass({
	render() {
		return(
			<div>
				{this.props.data ?
					<div>
						<p>Choose your favourite boards to proceed further
						<span className="eq-m-hint">(Default boards activated based on your permissions)</span></p>	
					</div>
					: <p>OOPS!! No boards available.</p>
				}
			</div>
		);
	}
})

Board = React.createClass({
	render() {
		return(
			<div>
				{this.props.data ?
					<div className="container eq-m-boards">
						<h2>Create Your Board</h2>
						<ul>
							{this.props.data.map(function(board, i){
								return <BoardItem key={board._id} data={board} />
							}, this)}
						
						</ul>
					</div>
					: ''
				}
			</div>
		);
	}
})

BoardItem = React.createClass({
	render() {
		return <li><a href={this.props.data.routeId}><span className={this.props.data.className}></span>{this.props.data.displayName}</a></li>	
	}
})