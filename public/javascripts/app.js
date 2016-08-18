var app = angular.module('passbook', [
	'ui.router',
	'ngCookies',	
	'ngAnimate',
	'base64',
	'pascalprecht.translate',
	'ui.bootstrap',
	'datatables',
    'datatables.bootstrap',
    'datatables.buttons',
]);

app.config(function ($stateProvider,$urlRouterProvider) {  
  $urlRouterProvider.otherwise('/main/home'); //기본주소 설정
  $stateProvider
    .state('main', {
      url: "/main",
      templateUrl: "html/main.html",
    })
    .state('main.home', {
      url: "/home",
      templateUrl: "html/main/home.html",
    })
    .state('main.about', {
      url: "/about",
      templateUrl: "html/main/about.html",
    })
    .state('main.contact', {
      url: "/contact",
      templateUrl: "html/main/contact.html",
    })
    .state('auth', {
      url: "/auth",
      templateUrl: "html/auth.html",
    })
    .state('auth.login', {
      url: "/login",
      templateUrl: "html/auth/login.html",
    })
    
    
})
app.constant('CONFIG', {		
	'BLADE_ID' 		: 'TEST',
	'BLADE_SECRET'	: 'test1234!@#$',		
	'BLADE_URL'		: 'http://blade3.rfacto.com:3903'
});

app.component('includeNav', {
	templateUrl: 'html/include/nav.html'
});
app.component('includeFooter', {
	templateUrl: 'html/include/footer.html'
});