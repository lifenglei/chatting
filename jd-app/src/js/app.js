var productList = angular.module('jdproduct',[])//创建模块
productList.controller('productListController',['$scope','$http',
    function($scope,$http){
        $http(
            {
            method: 'GET', 
            url: 'data/data-0.json'
            }).
           success(function(data, status, headers, config) {
                console.log(data);
                $scope.products = data;
           }).
           error(function(data, status, headers, config) {
            
           });
    }
])