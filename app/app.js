'use strict';

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
    $scope.phones = [
        {
            name: 'Nexus X',
            snippet: 'Fast just got faster with Nexus S.'
        },
        {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        },
        {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
        }
    ];
});