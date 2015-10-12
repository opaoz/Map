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

        httpRequest.send('PREFIX rela: <http://purl.org/vocab/relationship/> SELECT ?child ?parent WHERE {?child rela:childOf ?parent.}').then(function (response) {
            console.log(response);
        });
    }]);
})();