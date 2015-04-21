var app = angular.module('timeApp');
app.directive('showTime', function() {
	return {		
		restrict: 'E',
		template: '<div> current time {{time}} </div>',
		link: function(scope, elem, attr) {
			var currentTime = new Date();
			scope.time = currentTime.toString();
		}
	}
})