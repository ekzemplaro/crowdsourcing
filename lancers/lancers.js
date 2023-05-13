// -----------------------------------------------------------------------
//	lancers.js
//
//					May/14/2023
//
// -----------------------------------------------------------------------
var app = angular.module('myApp', [])
const url_in = "./convert.py"
// const url_in = "./projects.json"

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
