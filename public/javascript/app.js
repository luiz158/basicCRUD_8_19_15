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
    "<li class='panel panel-default col-sm-4'>" +
      "<ul class='panel-body'>" +
        "<li>" + profileDB[i]._name + "</li>" +
        "<li>" + profileDB[i]._age + "</li>" +
        "<li>" + profileDB[i]._location + "</li>" +
        "<li>" + "<img class='img-responsive img-circle' src='" + profileDB[i]._pic + "' />" + "</li>" +
      "</ul>" +
      "<div class='panel-footer'>" +
        "<button class='btn btn-block btn-warning' onclick='startUpdate(" + profileDB[i]._id + ")'>" +
          "Edit" +
        "</button>" +

        "<button class='btn btn-block btn-danger' onclick='deleteProfile(" + profileDB[i]._id + ")'>" +
          "Delete" +
        "</button>" +
      "</div>" +
    "</li>";
  }
}

var startUpdate = function(id) {
  for(var i = 0; i < profileDB.length; i += 1) {
    if(profileDB[i]._id === id) {
      document.getElementById("updateForm").innerHTML =
      "<h3 class='page-header text-center'>Update Contact</h3>" +
      "<div class='form-group'>" +
      "<input class='form-control' id='editName' value='" + profileDB[i]._name + "'/>" +
      "</div>" +
      "<div class='form-group'>" +
      "<input class='form-control' id='editAge' value='" + profileDB[i]._age + "'/>" +
      "</div>" +
      "<div class='form-group'>" +
      "<input class='form-control' id='editLocation' value='" + profileDB[i]._location + "'/>" +
      "</div>" +
      "<div class='form-group'>" +
      "<input class='form-control' id='editPicture' value='" + profileDB[i]._pic + "'/>" +
      "</div>" +
      "<button class='btn btn-warning btn-block' onclick='finishUpdate(" + profileDB[i]._id + ")'>" +
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
