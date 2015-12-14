//
//Tasks = new Mongo.Collection("tasks");
//if (Meteor.isClient) {
//    // counter starts at 0
//   /* Session.setDefault('assets',"");
//
//    Template.assets.helpers({
//        assets: function () {
//            return Session.get('assets');
//        }
//    });*/
//
///*
//    Template.assets.events({
//        'click button': function (evt, tpl) {
//            console.log("You clicked something",evt);
//            var userId= 'dgrampa';
//            //tpl.find('input#ipv4').value;
//            //console.log("IP", ip);
//
//            Meteor.call('getAssetsForUser', userId, function (err, res) {
//                console.log("Meteor Call, ERROR ", err);
//                console.log("Meteor Call, Res ", JSON.stringify(res) );
//                // The method call sets the Session variable to the callback value
//                if (err) {
//                    Session.set('assets', {error: err});
//                } else {
//                    Session.set('assets', res.data.assets);
//                    return res.data.assets;
//                }
//            });
//        }
//    });*/
//
//    //function getAssetForUser(userId){
//    //
//    //console.log("Inside Methods, IP=", userId);
//    //}
//
//    //Meteor.methods({
//    //    getAssetForUser: function(userId) {
//    //        console.log("Inside Methods, IP=", userId);
//    //    }
//    //});
//}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });

    Meteor.methods({
        // The method expects a valid IPv4 address
        'getAssetsForUser': function (userId) {
            console.log("Inside Methods, IP=", userId);
            console.log('Method.getAssetsForUser for', userId);
            // Construct the API URL
            //http://sv2lxixpdi01.corp.equinix.com:8090/ix/v1/participants
            //  var participantUrl='http://sv2lxixpdi01.corp.equinix.com:8090/ix/v1/participants';
            var assetServiceUrl='http://sv2lxb2bint01.corp.equinix.com:9090/v1/installbase/assets?userId='+userId;
            var response={"data":"1234"};
            //var response = HTTP.get(participantUrl);
            console.log(response);
            return response;
        }

    });

    //Meteor.call('getAssetsForUser', 'dgrampa', function (err, res) {
    //    console.log("Inside Call");
    //    console.log(res);
    //    console.log("Meteor server, Res ", JSON.stringify(res) );
    //    if (err) {
    //        return err;
    //    } else {
    //        return res;
    //    }
    //});
}
