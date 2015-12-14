ConfigureDashBoard = React.createClass({
	render() {
		return(
			<div className="eq-m-boards">
				<div className="eq-m-welcome-head">
					<h1>Welcome</h1>
					<p>Welcome to Equinix Mobile 360 App.
					Choose your favourite boards to proceed further
					<span className="eq-m-hint">(Default boards activated based on your permissions)</span></p>
				</div>
				<div className="container eq-m-boards">
					<h2>Create Your Board</h2>
					<ul>
						<li><a href="http://ixpdev11.ap.equinix.com:3000/ibxes"><span className="eq-m-feature-my-ibx"></span>My IBX(s)</a></li>
						<li><a href="#"><span className="eq-m-feature-orders"></span>Orders</a></li>
						<li><a href="#"><span className="eq-m-feature-ports"></span>Ports</a></li>
						<li><a href="#"><span className="eq-m-feature-assets"></span>Assets</a></li>
						<li><a href="#"><span className="eq-m-feature-invoices"></span>Invoices</a></li>
						<li><a href="#"><span className="eq-m-feature-notifications"></span>Notifications</a></li>
						<li><a href="#"><span className="eq-m-feature-traffic-data"></span>Traffic Data</a></li>
						<li><a href="#"><span className="eq-m-feature-buyers"></span>Buyers</a></li>
						<li><a href="#"><span className="eq-m-feature-sellers"></span>Sellers</a></li>
						<li><a href="#"><span className="eq-m-feature-service-providers"></span>Service Providers</a></li>
						<li><a href="#"><span className="eq-m-feature-eq-connect-traffic-data"></span>Equinix Connect Traffic Data</a></li>
						<li><a href="#"><span className="eq-m-feature-colocatin-opp"></span>Colocation Opportunities</a></li>
						<li><a href="#"><span className="eq-m-feature-interconnection-opp"></span>Interconnection Opportunities</a></li>
					</ul>
				</div>
			</div>
		);
	}
})