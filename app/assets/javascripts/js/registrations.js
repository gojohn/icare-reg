app.factory( 'Registration', function( $resource ) {
  return $resource( '/registrations/:id',
    { 'id': '@id' },
    {
      create: { method: 'POST' },
      save:   { method: 'PUT'  }
    }
  );
});

function ListCtrl($scope, Registration) {
  $scope.registrations = Registration.query();
}

function RegistrationCtrl($scope, Registration) {
  $scope.registrations = Registration.query();
}

function RegisterCtrl($scope, Registration) {
  $scope.registrations = Registration.query();
}

$(function () {
  $('.nav a').click(function (e) {
    $(this).tab('show');
  })
});