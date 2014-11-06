var app = angular.module('msApp', ['ngRoute']);
app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/show', {
			controller: 'showCtrl',
			templateUrl: 'tpl/show.html'
		}).when('/about', {
			controller: 'aboutCtrl',
			templateUrl: 'tpl/about.html'
		}).when('/case', {
			controller: 'caseCtrl',
			templateUrl: 'tpl/case.html'
		}).when('/notice', {
			controller: 'noticeCtrl',
			templateUrl: 'tpl/notice.html'
		}).when('/news', {
			controller: 'newsCtrl',
			templateUrl: 'tpl/news.html'
		}).when('/news/add', {
			controller: 'newsCtrl',
			templateUrl: 'tpl/addnews.html'
		}).when('/news/edit/:index', {
			controller: 'newsCtrl',
			templateUrl: 'tpl/editnews.html'
		}).when('/user', {
			controller: 'userCtrl',
			templateUrl: 'tpl/user.html'
		}).otherwise({
			redirectTo: '/show'
		})
	}
]);
// main controller
app.controller('ctrl', ['$scope',
	function($scope) {
		$scope.menus = [{
			name: '产品展示',
			url: '#/show'
		}, {
			name: '关于我们',
			url: '#/about'
		}, {
			name: '典型案例',
			url: '#/case'
		}, {
			name: '行业新闻',
			url: '#/news'
		}, {
			name: '网站公告',
			url: '#/notice'
		}, {
			name: '添加管理员',
			url: '#/user'
		}];
	}
]);
// show controller
app.controller('showCtrl', ['$scope',
	function($scope) {

	}
]);
// about controller
app.controller('aboutCtrl', ['$scope',
	function($scope) {

	}
]);
// case controller
app.controller('caseCtrl', ['$scope',
	function($scope) {

	}
]);
// notice controller
app.controller('noticeCtrl', ['$scope',
	function($scope) {

	}
]);
// news controller
app.controller('newsCtrl', ['$scope', '$routeParams', '$window',

	function($scope, $routeParams, $window) {
		$scope.newsObj = {
			list: [{
				id: '100',
				title: '标题--行业新闻测试数据',
				content: '<h1>内容--行业新闻测试数据</h1>',
				time: Date.now(),
				author: 'chy'
			}, {
				id: '200',
				title: 'test-title',
				content: 'test-content',
				time: Date.parse('2014-11 15:35'),
				author: 'chengyang'
			}]
		};
		console.log($scope.newsObj.list);
		// edit news
		$scope.newsEditObj = {
			news: $scope.newsObj.list[$routeParams.index],
			update: function() {
				console.log(this.news);
			}
		};
		// add news
		$scope.newsAddObj = {
			news: {
				title: '',
				content: '',
				publish: false
			},
			add: function() {
				$scope.newsObj.list.push(this.news);
				console.log($scope.newsObj.list);
			}
		}

	}
]);
// user controller
app.controller('userCtrl', ['$scope',
	function($scope) {

	}
]);