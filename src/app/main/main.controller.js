class MainController {
  constructor ($scope, MainFactory) {
    'ngInject';

    MainFactory.getUsers().then(function(response) {
      // console.log(response);
      $scope.users = response;
    });

    $scope.submitUser = function(user) {
      var userList = new Firebase('https://firecontent.firebaseio.com/user');
      userList.push(user);
      MainFactory.getUsers().then(function(response) {
        $scope.users = response;
      });
    };

    $scope.deleteUser = function(user) {
      var userList = new Firebase('https://firecontent.firebaseio.com/user/' + user.$id);
      userList.remove();
      MainFactory.getUsers().then(function(response) {
        $scope.users = response;
      });
    };
  }
}

export default MainController;
