if (Meteor.isClient) {
  Deps.autorun(function() {
    var OldUserId = Session.get("userId");
    var userId = Meteor.userId();
    Session.set("userId", userId);

    if (userId && (userId != OldUserId)) {
      Meteor.logoutOtherClients(function(error) {
        if (error) console.log("Meteor.logoutOtherClients ERROR" + error);
      })
    }
  });
}
