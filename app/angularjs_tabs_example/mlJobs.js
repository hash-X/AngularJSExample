function MLJobsController($scope, $location, MLDevService) {
        $scope.isLoading = false;
        $scope.jobs = [];
        $scope.columns = ['id', 'name', 'ownerName', 'status'];
        $scope.columnNames = ['ID', '名称', 'Owner', '状态', '操作'];

        _initController();

        function _initController() {
            MLDevService.getMLFlows(function (items) {
                _.each(items, function (i) {
                    $scope.jobs.push({
                        id: i['id'],
                        name: i['name'],
                        ownerId: i['ownerId'],
                        ownerName: i['owner']['username'],
                        status: i['status']
                    });
                });
            });
        }

        this.develop = function (id) {
            if (id) {
                $location.path("/ml/dev/" + id);
            } else {
                $location.path("/ml/dev")
            }
        };

        this.delete = function (index, id) {
            MLDevService.deleteJob(id).then(function (res) {
                if (res.success) {
                    $scope.jobs.splice(index, 1);
                } else {
                    alert(res.msg);
                }
            });
        };

        this.run = function (id) {
            MLDevService.runJob(id).then(function (res) {
                if (res.success) {
                    _.each($scope.jobs, function (job) {
                        if (job['id'] == id) {
                            job['status'] = res['data']['status'];
                            return false;
                        }
                    })
                } else {
                    alert(res.msg);
                }
            });
        };

        this.stop = function (id) {
            MLDevService.stopJob(id).then(function (res) {
                if (res.success) {
                    _.each($scope.jobs, function (job) {
                        if (job['id'] == id) {
                            job['status'] = res['data']['status'];
                            return false;
                        }
                    })
                } else {
                    alert(res.msg);
                }
            });
        };
    }
