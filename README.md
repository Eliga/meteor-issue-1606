meteor-issue-1606
=================

https://github.com/meteor/meteor/issues/1616


LogoutOtherClients on new Login works fine on other browsers or other devices loggued, good !

But when opening a Meteor App in a second tabs on the same browser, both windows are logout. Would be better to logout only the other one (or none !?).

Another way to get the same problem, being in a Meteor app, click on an external link, then comme back with the back button of the navigator, here only one tab but still logout (seems always two tabs in browser memory)

---

To get the bug, got to  http://issue-1606.meteor.com/ :

"Connect, go to following link, come back and then after 5 to 10 seconds you will be disconnected..."
