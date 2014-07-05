
var Logger = {
  debug: function(message, object) {
    console.log(message);
    console.log(object);
  }
};


Template.main.logged_in = function() {
  var current_user = Meteor.user();
  Logger.debug("current_user", current_user);
  return current_user;
};

Template.users.users = function() {
  var users = Meteor.users.find();
  Logger.debug("users.users", users);
  var users_view = [];
  users.forEach(function(u) {
    Logger.debug("user", u);
    if(u.emails) {
      var email = u.emails['0'].address;
    } else {
      var email = '';
    }
    var values = {username: u.username, email: email, id: u._id};
    Logger.debug("values", values);
    users_view.push(values);
  });
  return users_view;
};


// Meteor.logout()
// Meteor.loginWithPassword("email", "password")
// Account.createUser()
// Meteor.users.find().forEach(function(u){console.log(u);});
// Accounts.createUser({password: "passss", email: "shivika@gmail.com", username: "shivika"},function(u){console.log(u);});
