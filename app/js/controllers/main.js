'use strict';
/**
 * @file main.js
 *
 * @author Vladimir_Levin
 * @date 12.10.2015
 */
(function () {
    angular.module('App').controller('MainController', ['httpRequest', function (httpRequest) {
        var vm = this;

        vm._init_ = function () {
            console.log('create controller');
            vm.queries = [
                {
                    text: 'PREFIX rela: <http://purl.org/vocab/relationship/> SELECT ?child ?parent WHERE {?child rela:childOf ?parent.}'
                },
                {
                    text: ''
                },
                {
                    text: ''
                }
            ];
            vm.output = 'Text will be here';
        };

        vm.send = function (index) {
            httpRequest.send(vm.queries[index].text).then(function (response) {
                console.log(response);
                vm.output = response.data;
            });
        };
    }]);
})();