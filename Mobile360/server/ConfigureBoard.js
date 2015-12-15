Meteor.startup(function () {
    
    // code to run on server at startup
    configureInitialBoards();
    
});

Meteor.publish("availableBoards", function () {
  return Boards.find().fetch();
});

Meteor.methods({
  getAvailableBoards: function() {

    var availableBoards = Boards.find().fetch();

    console.log('Returning getAvailableBoards dashboards from server : ');
    console.log(availableBoards);
    return availableBoards;
  }, 

  getAvailableBoardsSync: function() {
    this.unblock();

    var response = Meteor.wrapAsync(this.getAvailableBoards);
    return response;
  }


});

function configureInitialBoards() {
  console.log("Initializing boards....Checking!!");


  if(Boards.find().count() === 0) {
    console.log("No boards found. Creating new boards for you....");

    createNewBoard('My IBX(s)', 'eq-m-feature-my-ibx', 'eq-m-feature-my-ibx', 'boards/eq-m-feature-my-ibx');
    createNewBoard('Orders', 'eq-m-feature-orders', 'eq-m-feature-orders', 'boards/eq-m-feature-orders');
    createNewBoard('Ports', 'eq-m-feature-ports', 'eq-m-feature-ports', 'boards/eq-m-feature-ports');
    createNewBoard('Assets', 'eq-m-feature-assets', 'eq-m-feature-assets', 'boards/eq-m-feature-assets');
    createNewBoard('Invoices', 'eq-m-feature-invoices', 'eq-m-feature-invoices', 'boards/eq-m-feature-invoices');
    createNewBoard('Notifications', 'eq-m-feature-notifications', 'eq-m-feature-notifications', 'boards/eq-m-feature-notifications');
    createNewBoard('Traffic Data', 'eq-m-feature-traffic-data', 'eq-m-feature-traffic-data', 'boards/eq-m-feature-traffic-data');
    createNewBoard('Buyers', 'eq-m-feature-buyers', 'eq-m-feature-buyers', 'boards/eq-m-feature-buyers');
    createNewBoard('Sellers', 'eq-m-feature-sellers', 'eq-m-feature-sellers', 'boards/eq-m-feature-sellers');
    createNewBoard('Service Providers', 'eq-m-feature-service-providers', 'eq-m-feature-service-providers', 'boards/eq-m-feature-service-providers');
    createNewBoard('Equinix Connect Traffic Data', 'eq-m-feature-eq-connect-traffic-data', 'eq-m-feature-eq-connect-traffic-data', 'boards/eq-m-feature-eq-connect-traffic-data');
    createNewBoard('Colocation Opportunities', 'eq-m-feature-colocatin-opp', 'eq-m-feature-colocatin-opp', 'boards/eq-m-feature-colocatin-opp');
    createNewBoard('Interconnection Opportunities', 'eq-m-feature-interconnection-opp', 'eq-m-feature-interconnection-opp', 'boards/eq-m-feature-interconnection-opp');

    console.log("Initializing boards....Done!!");
  }
};

function createNewBoard(displayName, boardName, className, routeId) {
  var checkIfExistsQuery= {boardName: boardName};
  if (Boards.find(checkIfExistsQuery).count() === 0) {
    Boards.insert({
      boardName: boardName, 
      displayName: displayName, 
      className: className, 
      routeId: routeId
    });
  }
};

