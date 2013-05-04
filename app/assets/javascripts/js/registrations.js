app.factory( 'Registration', function( $resource ) {
  return $resource( '/registrations/:id',
    { 'id': '@id' },
    {
      create: { method: 'POST' },
      update:   { method: 'PUT'  }
    }
  );
});

function ListCtrl($scope, Registration) {
  $scope.registrations = Registration.query();
  
  $scope.order_by = 'last_name';
  $scope.order_direction = true;

  $scope.orderOn = function ( how ) {
    if ( $scope.order_by == how ) {
      $scope.order_direction = !$scope.order_direction;
    } else {
      $scope.order_by = how;
      $scope.order_direction = false;
    }
  };

  $scope.checkIn = function (regid) {
    var reg = Registration.update({id:regid, checkin_time: 1}, function () {
      $scope.registrations = Registration.query();
    });
  };

  $scope.return = function (regid) {
    var reg = Registration.update({id:$scope.edit_me.registration_id, return_time: 1}, function () {
      $scope.registrations = Registration.query();
    });
  };

  $scope.update = function () {
    var reg = Registration.update({
        id:         $scope.edit_me.registration_id,
        ride:       $scope.edit_me.ride,
        bib_number: $scope.edit_me.bib_number,
        payment:    $scope.edit_me.payment,
        checkin_time: 1
      }, function () {
        $scope.registrations = Registration.query();
      }
    );
  };

  $scope.do = function (reg) {
    console.log('done did');
    $scope.edit_me = reg;
  };

}

function RegistrationCtrl($scope, Registration) {
  $scope.registrations = Registration.query();
}

function RegisterCtrl($scope, Registration) {
//  $scope.registrations = Registration.query();
//  $scope.first_name="pe";
  $scope.ride="100 km";
  $scope.shirt_size="L";

  var clearIt = function () {
    console.log($scope);
    aForm.first_name='';
    aForm.last_name='';
    aForm.email='';
    aForm.phone='';
    aForm.gender='';
    aForm.payment='';
    aForm.addl_donation='';
    aForm.address='';
    aForm.city='';
    aForm.state='';
    aForm.zip='';
    aForm.emergency_contact='';
    aForm.emergency_phone='';
    aForm.ride='';
    aForm.shirt_size='';
  };
  
  $scope.clearIt = clearIt;

  $scope.submit = function (aForm) {
    var reg = new Registration({
      first_name: aForm.first_name,
      last_name: aForm.last_name,
      email: aForm.email,
      phone: aForm.phone,
      gender: aForm.gender,
      payment: "UNPAID",
      addl_donation: aForm.addl_donation,
      address: aForm.address,
      city: aForm.city,
      state: aForm.state,
      zip: aForm.zip,
      emergency_contact: aForm.emergency_contact,
      emergency_phone: aForm.emergency_phone,
      ride: aForm.ride,
      shirt_size: aForm.shirt_size
    });
    
    reg.$save(function () {
      alert('Thanks for Registering!');
      aForm.first_name='';
      aForm.last_name='';
      aForm.email='';
      aForm.phone='';
      aForm.gender='';
      aForm.payment='';
      aForm.addl_donation='';
      aForm.address='';
      aForm.city='';
      aForm.state='';
      aForm.zip='';
      aForm.emergency_contact='';
      aForm.emergency_phone='';
      aForm.ride='100 km';
      aForm.shirt_size='L';
    });
  };
  
}

$(function () {
  $('.nav a').click(function (e) {
    $(this).tab('show');
  })
});