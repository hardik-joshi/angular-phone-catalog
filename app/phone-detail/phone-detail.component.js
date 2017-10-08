'use strict';

angular.
	module('phoneDetail').
	component('phoneDetail',{
		templateUrl: 'phone-detail/phone-detail.template.html',
		controller: ['$http','$routeParams',
			function phoneDetailController($http,$routeParams){
                var self = this;
                
				$http.get('phones/' + $routeParams.phoneId + '.json').then(function(response){
                    self.phone = response.data; 
                });
			}
		]
	});