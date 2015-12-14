Ibxes = React.createClass({
        mixins: [ReactMeteorData],

        getMeteorData() {

           // return{
                Session.set('currentUser', Meteor.user());
            //currentUser:assetsClient.getAssetForUser("dgrampa")
       // }

        //    return {
        //        assets: Meteor.call('getAssetsForUser', 'dgrampa', function (err, res) {
        //                if (err) {
        //                   console.log("error whiel fetching the assets");
        //                }
        //        })
        //};
            //    if (err) {
            //        return err;
            //    } else {
            //        Session.set('currentUser', Meteor.user());
            //        return res.data;
            //    }
            //});
           // };

        },
        render() {
          // return <span>Hello {Session.get('currentUser').username}!</span>;
            console.log(Session.get('currentUser'));
           return <span>Hello {this.data.assets}!</span>;
        }
    });
    /*React.createClass({

    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    // Loads items from the Tasks collection and puts them on this.data.tasks
    getMeteorData() {
       // return {
            //tasks: Meteor.call('getAssetForUser',"dgrampa")

        Meteor.call('getAssetsForUser', 'dgrampa', function (err, res) {
                console.log("Inside Call");
                console.log(res);
                console.log("Meteor server, Res ", JSON.stringify(res) );
                if (err) {
                    return err;
                } else {
                    return {tasks:res.data};
                }
            });
       // }
    },

    renderTasks() {
        // Get tasks from this.data.tasks
        //return this.data.tasks.map((task) => {
            return  <span>Hello!</span>;
            // return <Task key={task._id} task={task} />;
       // });
    },

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Todo List</h1>
                </header>

                <ul>
                    <span>Hello!</span>;
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
});*/