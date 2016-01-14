export class MainFactory {
  constructor ($firebaseArray, $firebaseObject, myConfig) {
    'ngInject';

    var firebaseUsersRef = new Firebase(myConfig.firebaseURL + '/user');
    var userList = $firebaseArray(firebaseUsersRef);

    this.getUsers = function() {
      return userList.$loaded();
    };
  }
}
