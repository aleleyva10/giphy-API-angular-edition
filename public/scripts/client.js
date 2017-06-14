// using Angular module app
var myApp = angular.module('myApp', []);


myApp.controller('GiphyController', function($http) {
  var vm = this;
  vm.showGiphy = true;

  console.log('GiphyController hit');

  vm.startUpFunction = function() {
    console.log('in startUpFunction');

  };

  vm.getGiphy = function() {
    var vm = this;
    var searchURL = 'http://api.giphy.com/v1/gifs/search?q=';
    searchURL += vm.search;
    searchURL += '&api_key=dc6zaTOxFJmzC';
    console.log(searchURL);
    if (vm.search === '' || vm.search === undefined) {
      alert('Please enter a word!!');
    } else {
      $http({
        method: 'GET',
        url: searchURL
      }).then(function(response) {
        console.log('back with:', response);
        vm.data = response.data.data;
        vm.showGiphy = true;

      });
    }
  }

  vm.randomGiphy = function() {
    var vm = this;
    var searchURL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
    console.log(searchURL);
    $http.get(searchURL).then(function(response) {
      console.log('back with:', response);
      vm.showGiphy = false;
      vm.giphyRandom = response.data.data.image_url;
      console.log(vm.giphyRandom);
    });
  };

});
