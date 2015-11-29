//Common Authentication & Autherization logic goes here

Accounts.onLogin(function () {  

	console.log('Login is initialized ' + Meteor.userId());

  	FlowRouter.go('configure')
})

Tracker.autorun(function () {  
	console.log('Tracker.autorun');
	if (!Meteor.userId()) {
		console.log('No authentication found..');
		//FlowRouter.go('/user/login')
	}
})