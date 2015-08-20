var profileDB = [];
var counter = 0;
var Profile = function () {
  this._id = counter++;
  this._name = document.getElementById("name").value;
  this._age = document.getElementById("age").value;
  this._location = document.getElementById("location").value;
  this._pic = document.getElementById("picture").value;
};

var create = function() {
  var newProfile = new Profile();
  profileDB.push(newProfile);
  read();
};

var read = function() {
  document.getElementById("profiles").innerHTML = "";
  for(var i = 0; i < profileDB.length; i += 1) {
    document.getElementById("profiles").innerHTML +=
    "<li>" +
      "<ul>" +
      "<li>" + profileDB[i]._name + "</li>" +
      "<li>" + profileDB[i]._age + "</li>" +
      "<li>" + profileDB[i]._location + "</li>" +
      "<li>" + profileDB[i]._pic + "</li>" +
      "<li>" +
        "<button onclick='startUpdate(" + profileDB[i]._id + ")'>" +
          "Edit" +
        "</button>" +
      "</li>" +
      "<li>" +
        "<button onclick='deleteProfile(" + profileDB[i]._id + ")'>" +
          "Delete" +
        "</button>" +
      "</li>" +
      "</ul>" +
    "</li>";
  }
}

var startUpdate = function(id) {
  for(var i = 0; i < profileDB.length; i += 1) {
    if(profileDB[i]._id === id) {
      document.getElementById("updateForm").innerHTML =
      "<input id='editName' value='" + profileDB[i]._name + "'/>" +
      "<input id='editAge' value='" + profileDB[i]._age + "'/>" +
      "<input id='editLocation' value='" + profileDB[i]._location + "'/>" +
      "<input id='editPicture' value='" + profileDB[i]._pic + "'/>" +
      "<button onclick='finishUpdate(" + profileDB[i]._id + ")'>" +
        "Submit Update" +
      "</button>"
    }
  }
}

var finishUpdate = function(id) {
  for(var i = 0; i < profileDB.length; i += 1) {
    if(profileDB[i]._id === id) {
      profileDB[i]._name = document.getElementById("editName").value;
      profileDB[i]._age = document.getElementById("editAge").value;
      profileDB[i]._location = document.getElementById("editLocation").value;
      profileDB[i]._pic = document.getElementById("editPicture").value;
      document.getElementById("updateForm").innerHTML = "";
      read();
    }
  }
}

var deleteProfile = function(id) {
  for(var i = 0; i < profileDB.length; i += 1) {
    if(profileDB[i]._id === id) {
      profileDB.splice(i, 1);
      document.getElementById("updateForm").innerHTML = "";
      read();
    }
  }
}
