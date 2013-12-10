var app = angular.module('arenaApp', ['ngResource', 'ngSanitize']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'assets/js/templates/channel.html',
    controller: 'blogHome'
  });
  $routeProvider.when('/:slug', {
    templateUrl: 'assets/js/templates/channel.html',
    controller: 'channelShow'
  });
  }
);

app.controller('blogHome', function($scope, $resource) {
  var Channel = $resource('http://api.are.na/v2/channels/:slug');

  var channel = Channel.get({slug: 'blog-are-na', sort: 'position', direction: 'asc'}, function(){
    $scope.channel = channel;
  });
});

app.controller('channelShow', function($scope, $resource, $routeParams) {
  var Channel = $resource('http://api.are.na/v2/channels/:slug');

  var channel = Channel.get({slug: $routeParams.slug, sort: 'position', direction: 'asc'}, function(){
    $scope.channel = channel;
  });
});

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});