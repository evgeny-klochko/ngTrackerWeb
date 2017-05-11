(function () {
  'use strict';

  angular
    .module('TSC.dashboard')
    .config(['ChartJsProvider', function (ChartJsProvider) {
      // Configure all charts
      ChartJsProvider.setOptions({
        type: 'line',
        chartColors: ['#00FF00', '#FF0000'],
        responsive: true,
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 200
            }
          }]
        }
      });
      // Configure all line charts
      ChartJsProvider.setOptions('line', {
        showLines: true
      });
    }])
    .controller('CommonCtrl', CommonCtrl);

  /* @ngInject */
  function CommonCtrl() {
    var vm = this;

    vm.labels = [
      '4.05.2017', '5.05.2017', '6.05.2017', '7.05.2017',
      '8.05.2017', '9.05.2017', '10.05.2017', '11.05.2017',
      '12.05.2017', '13.05.2017', '14.05.2017', '15.05.2017',
      '16.05.2017', '17.05.2017', '18.05.2017', '19.05.2017',
      '20.05.2017'
    ];
    vm.series = ['Views', 'Errors'];
    vm.data = [
      [650, 590, 800, 810, 560, 550, 400, 590, 800, 810, 560, 550, 400, 410, 420, 430, 420],
      [65, 59, 80, 81, 56, 55, 40, 99, 210, 92, 30, 25, 20, 21, 20, 10, 11]
    ];

    angular.extend(vm, {

    });

    angular.extend(vm, {

    });
  }
}());
