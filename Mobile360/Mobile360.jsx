if (Meteor.isClient) {
  Meteor.startup(function () {
    // ReactDOM.render(<Authentication />, document.getElementById("app-container"));
    //createTestUserOnStartup();
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
    // code to run on server at startup
    // screateTestUserOnStartup();

    console.log("Creating test user for demo....");

    if(!Meteor.users.find().count()) {
      var options = {
        username: 'dgrampa', 
        password: 'welcome1', 
        email: 'test@test.com'
      };
      Accounts.createUser(options);

      console.log("Creating test user for demo....Done");
    }
    
  });
}

Meteor.methods({

  createTestUserOnStartup() {
    console.log("Creating test user for demo....");

    if(!Meteor.users.find().count()) {
      var options = {
        username: 'dgrampa', 
        password: 'welcome1', 
        email: 'test@test.com'
      };
      Accounts.createUser(options);

      console.log("Creating test user for demo....Done");
    }
  }
});