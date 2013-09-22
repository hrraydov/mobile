document.addEventListener('deviceready', function() {

}, false);

function TasksCtrl($scope) {
    $scope.tasks = JSON.parse(localStorage.tasks);

    $scope.addTask = function() {
        $scope.tasks.push({content: $scope.taskContent});
        $scope.save();
        $scope.taskContent = '';
    };

    $scope.removeTask = function(index) {
        $scope.tasks.splice(index,1);
        $scope.save();
    };

    $scope.save = function() {
        localStorage.tasks = JSON.stringify($scope.tasks);
    }
}

