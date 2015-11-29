
/* Controllers */
var ngcControllers = angular.module('ngcControllers', [])

.controller('buildingDataCloudCtrl', function($rootScope, $scope, dataSvc, $location) {
    // sites data
    $scope.sitesData = [];
   

    dataSvc.getQuery('me').then(function (response) {
             $scope.user = response;

             if(response=='' || response == null){
                $location.path('/login');
             }
            }, function (error) {
                console.log(error);
            });



    $scope.$on('loginPage', function(event, args) {
        $scope.loginBody = true;
    });
})


.controller('loginCtrl', function($rootScope, $scope, $location, dataSvc) {
    // no need min-width of page
    
    $scope.$emit('loginPage');
    // validate login
    $scope.invalidPass = false;
    $scope.invalidUsername = false;
   // $scope.username = "user@user.com"
    //$scope.password = "123456"
    $scope.validate = function() {

        if(!$scope.username) {
            $scope.invalidUsername = true;
        } else {
                $scope.invalidUsername = false;
            }
        
        if(!$scope.password) {
            $scope.invalidPass = true;
        } else {
            $scope.invalidPass = false;
        }

        if( !$scope.invalidPass && !$scope.invalidUsername ) {
            var data = {email:$scope.username, password:$scope.password};
           dataSvc.postQuery('/users/session', data).then(function (response) {
             $location.path('/mobile');
            }, function (error) {
                console.log(error);
            });
           
        }
    }
})

.controller('mainHeaderCtrl', function($rootScope, $scope, $location, dataSvc) {
    // main nav
    $scope.tab = 0;
    $scope.setTab = function(newTab){
        $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
        return $scope.tab === tabNum;
    };

    // search option
    $scope.global = false;
    $scope.inSection = true;
    $scope.searchOption = function() {
        $scope.global = !$scope.global;
        $scope.inSection = !$scope.inSection;
    }

 $scope.logOut = function() {
    dataSvc.getQuery('signout').then(function (response) {
                $location.path('/login');
            
            }, function (error) {
                console.log(error);
            });
 
           
 }
     dataSvc.getQuery('me').then(function (response) {
             $scope.user = response;
             if(response=='' || response == null){
                $location.path('/login');
             }
            }, function (error) {
                console.log(error);
            });
 
           
    
})


.controller('mobileCtrl', function($rootScope, $scope, dataSvc, $sce) {
    // mobile data
    $scope.mobileData = {}
   $scope.myInterval = 3000;
  

    dataSvc.getQuery('Mobiles').then(function (response) {
        $scope.mobileData = response;
    }, function (error) {
        console.log(error);
    });  

   
    $scope.buyProducts = function(prize){
     var data = {prize:prize}
            dataSvc.postQuery('buyProducts',data).then(function (response) {
               // $scope.mobileData = response;
             $scope.buyHtml = $sce.trustAsHtml(response.html);
            }, function (error) {
                console.log(error);
            });  

    }


})


