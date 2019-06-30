// -----------------------------------------------------------------------
//	crowdworks.js
//
//					Jul/25/2017
//
// -----------------------------------------------------------------------
var app = angular.module('myApp', [])
var url_in = "./convert.py"

app.controller('MainController', ['$scope', '$timeout', '$http', function($scope, $timeout, $http){
    $timeout(function() {
$http.get(url_in)
	.then(function(res) {
	console.log ('読み込み成功')
	console.log (res.data)
	$scope.items = res.data
    })
	.catch (function(err) {
		alert('読み込み失敗')
    })
})

}])

// -----------------------------------------------------------------------
