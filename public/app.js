function showSnackBar(arg,col) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    x.innerHTML = arg;

    // Add the "show" class to DIV
    x.className = "show";

    if( col == 'Red' )x.style.backgroundColor = '#800000';else x.style.backgroundColor = '#FFC706';

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function showSnackBar1(arg,col) {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar1")

    x.innerHTML = arg;

    // Add the "show" class to DIV
    x.className = "show";

    if( col == 'Red' )x.style.backgroundColor = '#800000';else x.style.backgroundColor = '#FFC706';

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


function showMasterProgress(arg) {
    
    if(arg)
    {
    	$("#loader1").css({'visibility':'visible'});
    	$("#loader1").fadeIn("fast");
    }	
	else
	{
		$("#loader1").fadeOut("fast",function(){
			$("#loader1").css({'visibility':'hidden'});	
		});
	}
		
}

window.setTimeout(function(){
	showMasterProgress(false);
	//alert('Hi');
},500);

var app = angular.module('myApp',['ngRoute']);

//alert('Hi');

app.config(function($routeProvider){
	
	$routeProvider
	
	.when('/',{
		templateUrl : 'home.html',
		controller : 'homeController'
	})
	.when('/home',{
		templateUrl : 'home.html',
		controller : 'homeController'
		
	})
	.when('/login',{
	
		templateUrl : 'c_user/login.html',
		controller  : 'UserController'
		
		
	})
	.when('/logout',{
	
		templateUrl : '',
		controller  : ''
		
	})
	.when('/chat',{
	
		templateUrl : 'chat/chat.html',
		controller  : 'ChatController'
		
	})
	
	.when('/chat/:secondUser',{
	
		templateUrl : 'chat/chat.html',
		controller  : 'ChatController'
		
	})
	
	.when('/groupchat',{
	
		templateUrl : 'groupchat/groupchat.html',
		controller  : 'GroupChatController'
		
	})
	
	
	.when('/aboutus',{
		templateUrl : 'aboutus.html'
	})
	.when('/friends',{
		templateUrl : 'friends/friend.html',
		controller  :  'FriendController'
	})
	.when('/friends/:secondUser',{
		templateUrl : 'friends/friend.html',
		controller  :  'FriendController'
	})
	.when('/searchUser',{
		templateUrl : 'c_user/searchUser.html',
		controller  :  'UserController'
	})
	.when('/jobs',{
		templateUrl : 'c_job/job.html',
		controller : 'JobController'
	})
	.when('/blogs',{
		templateUrl : 'blogs/blog.html',
		controller: 'BlogController'
	})
	.when('/blogs/:secondUser',{
		templateUrl : 'blogs/blog.html',
		controller: 'BlogController'
	})
	.when('/forums',{
		templateUrl : 'forums/forums.html',
		controller: 'ForumController'
	})
	.when('/forums/:secondUser',{
		templateUrl : 'forums/forums.html',
		controller: 'ForumController'
	})
	.when('/profile',{
		templateUrl : 'profile/profile.html',
		controller: 'ProfileController'
	})
	.when('/profile/:secondUser',{
		templateUrl : 'profile/profile.html',
		controller: 'ProfileController'
	})
	.when('/createBlog',{
		templateUrl: 'c_blog/createBlog.html',
		controller: 'BlogController'
	})
	.when('/events',{
		templateUrl: 'c_event/listEvents.html',
	    controller: 'EventController'
	})
	
})