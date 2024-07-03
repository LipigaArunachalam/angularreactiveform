// app.js
var app = angular.module('feedbackApp', []);

app.controller('FeedbackController', function($scope) {
    $scope.feedback = {};
    $scope.submitted = false;

    $scope.submitFeedback = function(isValid) {
        if (isValid) {
            $scope.submitted = true;
            console.log('Feedback submitted:', $scope.feedback);
        } else {
            $scope.submitted = false;
            console.log('Feedback form is not valid');
        }
    };
});
