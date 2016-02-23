angular.module('TabsApp', [])
    .controller('TabsCtrl', ['$scope', function ($scope) {
        $scope.tabs = [{
            title: '作业运行',
            url: 'job_running.html'
        }, {
            title: '结果对比',
            url: 'compare.html'
        }];

        $scope.currentTab = 'job_running.html';

        $scope.onClickTab = function (tab) {
            $scope.currentTab = tab.url;
        }

        $scope.isActiveTab = function (tabUrl) {
            return tabUrl == $scope.currentTab;
        }
    }]);