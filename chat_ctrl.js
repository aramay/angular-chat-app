var app = angular.module("app",["pubnub.angular.service"]);

app.controller("ChatCtrl", function ($scope, Pubnub) {

    $scope.channel = "mesages-channel";
    // Generating a random uuid between 1 and 100 using an utility function from the lodash library.
    $scope.uuid = _.random(100).toString();

    Pubnub.init({
        publish_key:"pub-c-ea1c66ab-94c3-4987-926a-8dd6d3bf504e",
        subscribe_key:"sub-c-8dc59e18-b283-11e6-a071-02ee2ddab7fe",
        uuid: $scope.uuid
    });
});
