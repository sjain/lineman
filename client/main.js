
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
    var values = {username: u.username, email: u.emails['0'].address, id: u._id};
    Logger.debug("values", values);
    users_view.push(values);
  });
  return users_view;
};
