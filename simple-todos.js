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
 
}


//===========================
//サーバー側のみで動くコード
//===========================
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
