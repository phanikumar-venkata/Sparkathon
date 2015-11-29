Login = React.createClass({

	authenticateUser(event) {
	    event.preventDefault();
	    var username = ReactDOM.findDOMNode(this.refs.username).value.trim();
	    var password = ReactDOM.findDOMNode(this.refs.password).value.trim();

	    console.log('username : ' + username);
	    console.log('password : ' + password);
	    
	    Meteor.loginWithPassword(username, password, function(error) {
	    	console.log("Error : " + error);
	    });
	}, 
	
	render() {
		return(
			<div className="eq-m-login">
				<div className="eq-m-logo"></div>
				<div className="eq-m-login-form container">
					<form id="login-form" onSubmit={this.authenticateUser}>
				    	<div className="col-sm-por-12">
				    		<input type="text" id="login-email" ref="username"
				    			placeholder="Enter Username" 
				    			className="form-control col-sm-lan-offset-3 col-sm-lan-6" />
				    	</div>
						<div className="col-sm-por-12">
				    		<input type="password" id="login-password" ref="password" 
				    			placeholder="Enter Password" 
				    			className="form-control col-sm-lan-offset-3 col-sm-lan-6" />
				    	</div>
				    	<button className="btn btn-primary" id="login-button">
				    		Sign in
				    	</button>
				   	</form>
				</div>
			</div>
		);
	}
})