//===========================
//クライアント側のみで動くコード
//===========================
if (Meteor.isClient) {
  
  Template.body.helpers({
    tasks:[
       { text:"This is task 1"},
       { text:"This is task 2"},
       { text:"This is task 3"}
    ]
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
