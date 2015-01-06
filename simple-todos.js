Tasks = new Mongo.Collection("tasks");

//===========================
//クライアント側のみで動くコード
//===========================
if (Meteor.isClient) {

  Template.body.helpers({
    tasks: function (){
      return Tasks.find({});
    }
  });

  // Inside the if (Meteor.isClient) block, right after Template.body.helpers:
  Template.body.events({
    "submit .new-task": function (event) {
      // This function is called when the new task form is submitted

      var text = event.target.text.value;

      Tasks.insert({
        text: text,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    }
  });
 
}


//===========================
//サーバー側のみで動くコード
//===========================
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
