======== SET-UP =============================
---------------------------------------------
// In index.html, include:
<script src="angular/angular.js"></script>
// and 
<div ng-app="app">
  <app />
</div>

// In index js file, include:
angular.module('app', []);

// For each component, include something like:
angular.module('app')
.controller('AppCtrl', function(/* dependencies to be injected, e.g. $http */) {
  
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});

====== SUB-COMPONENTS ========
------------------------------
// Example sub-component:
angular.module('app')
.component('list', { 
  bindings: {
    items: '<',
  },
  controller: function() {},
  templateUrl: '/templates/list.html'
});

// list.html - separate file, or could be in same.
// ng-repeat will create as many DOM els as needed.
// For that, last bit is needed - item = item, then
// in the list-item, bind item.
--------- TEMPLATE -------------
<div>
  <h4> List Component </h4>
  There are {{$ctrl.items.length}} items.
  <list-item ng-repeat="item in $ctrl.items" item=item />
</div>
---------------------------------

// Example sub-sub-component:
angular.module('app')
.component('listItem', { // this line hooks to parent template!!!
  bindings: {
    item: '<',
  },
  controller: function() {},
  templateUrl: '/templates/list-item.html'
});

--------- TEMPLATE -------------
// list-item.html
<div>
  {{$ctrl.item.description}}
</div>


=========== EVENT LISTENING ======
----------------------------------
angular.module('video-player') // app.js
.component('app', {
  controller: function() {
    this.clicker = (clicked) => { // Here the function is defined
      console.log('Clicked on ' + clicked + '!');
    };
  },
  templateUrl: 'src/templates/app.html' 
});

------------- TEMPLATE  ------------ 
// app.html - in this template, use sub-component
<video-list clicker = "$ctrl.clicker"> </video-list>
// Note: In html tags, snake case, in js, camel case!!!

------------- SUB-COMPONENT ---------
angular.module('video-player')
.component('videoList', {
  bindings: {
    clicker: '<' // Connect to parent template!!!
  },
  controller: function() {
  },
  templateUrl: 'src/templates/videoList.html'
});

------------- TEMPLATE ------------
// videoList.html - in this template, event listener
<li ng-click="$ctrl.clicker"></li>



============ $HTTP ===============
----------------------------------
// Angular has built-in http methods:
$http(config);
// The config has lots of options. E.g.:
var config = {
  method: 'POST',
  url: 'http://example.com',
  headers: {
   'Content-Type': undefined  // e.g. 'application/json'
  },
  data: { test: 'test', blah: 'blah' }
}
// For get requests, you want to use params.
// (Params is for URL query parameters. A POST request needs to have a *body*!)
var config = {
  method: 'GET',
  url: 'http://example.com',
  headers: {
   'Content-Type': undefined
  },
  params: {
    'key': YOUTUBE_API_KEY,
    'q': 'surfing',
    'part': 'snippet',
    'maxResults': '5',
    'status.embeddable' : 'true'
  }
}
-------------------------------------



































