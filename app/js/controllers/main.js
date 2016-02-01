'use strict';
/**
 * @file main.js
 *
 * @author Vladimir_Levin
 * @date 12.10.2015
 */
(function () {
    angular.module('App').controller('MainController', ['config', '_', function (config, _) {
        var vm = this;

        vm._init_ = function () {
            /*vm.queries = [
             {
             title: 'Parent',
             text: 'SELECT ?child ?parent WHERE {?child rela:childOf ?parent.}'
             },
             {
             title: 'Spouse',
             text: 'SELECT ?first ?second WHERE {?first rela:spouseOf ?second}'
             },
             {
             title: 'Grandparent',
             text: 'SELECT ?person ?grandparent WHERE {?grandparent rela:parentOf ?y .?y rela:parentOf ?person.}'
             }
             ];
             vm.output = 'Text will be here';*/
            vm.map = {
                center: {
                    latitude: 51.262370,
                    longitude: 46.790909
                },
                zoom: 7
            };

            vm.paths = formatCoords(config.coordArray);
        };

        function formatCoords(coords) {
            return _.map(angular.fromJson(coords), function (value) {
                return [value.latitude, value.longitude];
            });
        }

    }]);
})();