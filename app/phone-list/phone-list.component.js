'use strict';

angular.
    module('phoneList').
    component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: function PhoneListController() {
            this.phones = [
                {
                    name: 'Nexus X',
                    snippet: 'Fast just got faster with Nexus S.',
                    age: 0
                },
                {
                    name: 'Motorola XOOM™ with Wi-Fi',
                    snippet: 'The Next, Next Generation tablet.',
                    age: 1
                },
                {
                    name: 'MOTOROLA XOOM™',
                    snippet: 'The Next, Next Generation tablet.',
                    age: 2
                }
            ];
            
            this.orderProp = 'age';
        }
    });