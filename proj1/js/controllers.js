angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope) {
   var data={email:"",
   password:""};
   $scope.data= data;
  $scope.loginEmail = function(){
 
  var ref = new Firebase("https://attend1234.firebaseio.com");
 
  ref.authWithPassword({
    email    : $scope.data.email,
    password : $scope.data.password
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });
 
};
})
   
.controller('signupCtrl', function($scope) {
    var ref = new Firebase("https://attend1234.firebaseio.com");
    var data={email:"",
   password:""};
   $scope.data= data;
ref.createUser({
 email    : $scope.data.email,
 password : $scope.data.password
}, function(error, userData) {
  if (error) {
    console.log("Error creating user:", error);
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
  }
});

})
 