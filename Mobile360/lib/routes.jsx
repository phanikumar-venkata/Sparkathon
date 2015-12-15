function checkLoggedIn (ctx, redirect) {
  if (!Meteor.userId()) {
    redirect('/user/login')
  }
}

function redirectIfLoggedIn (ctx, redirect) {  
  if (Meteor.userId()) {
    redirect('/dashboard')
  }
}

var privateRoutes = FlowRouter.group({  
  name: 'private',
  triggersEnter: [checkLoggedIn]
})

var publicRoutes = FlowRouter.group({  
  name: 'public'
})


privateRoutes.route("/", {
  name: "home",
  action() {
    ReactLayout.render(MainLayout, {
      content: <ConfigureDashBoard />
    });
  }
});

publicRoutes.route("/user/login", {
  name: "login",
  action() {
    ReactLayout.render(PublicLayout, {
      content: <Login />
    });
  }
});

publicRoutes.route("/signup", {
  name: "signup",
  action() {
    ReactLayout.render(PublicLayout, {
      content: <Signup />
    });
  }
});

privateRoutes.route("/configure", {
  name: "configure",
  action() {
    ReactLayout.render(MainLayout, {
      content: <ConfigureDashBoard />
    });
  }
});

publicRoutes.route("/ibxes", {
  name: "ibxes",
  action() {
      ReactLayout.render(PublicLayout, {
        content: <Ibxes />
      });
  }
});

publicRoutes.route("/assets", {
  name: "assets",
  action() {
      ReactLayout.render(PublicLayout, {
        content: <Assets />
      });
  }
});

