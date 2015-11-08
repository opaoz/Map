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
           /* console.log('create controller');
            vm.queries = [
                {
                    title:'Parent',
                    text: 'SELECT ?child ?parent WHERE {?child rela:childOf ?parent.}'
                },
                {
                    title:'Spouse',
                    text: 'SELECT ?first ?second WHERE {?first rela:spouseOf ?second}'
                },
                {
                    title:'Grandparent',
                    text: 'SELECT ?person ?grandparent WHERE {?grandparent rela:parentOf ?y .?y rela:parentOf ?person.}'
                }
            ];
            vm.output = 'Text will be here';*/
            vm.map = { center: { latitude: 42, longitude: 50 }, zoom: 8 };
        };

        /*vm.send = function (index) {
            httpRequest.send('PREFIX rela: <http://purl.org/vocab/relationship/>' + vm.queries[index].text).then(function (response) {
                console.log(response);
                vm.output = response.data;
            });
        };*/
    }]);
})();