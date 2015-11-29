TwoFactorAuthentication = React.createClass({
	render() {
		return(
			<div className="eq-m-login">
				<div className="eq-m-logo"></div>
					<div className="eq-m-login-form container">
					<form name="login" action="#" method="POST">
						<div className="col-sm-por-12">
							<input type="input" name="verificationCode" value="" placeholder="Enter authentication code" className="form-control eq-m-input-verification col-sm-lan-offset-3 col-sm-lan-6 col-sm-por-12" />
						</div>
						<button className="btn btn-primary">Verify Now</button>
					</form>
				</div>
			</div>
		);
	}
})