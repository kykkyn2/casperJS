var casper = require('casper').create();

casper.start('https://www.facebook.com/' , function (){
	 this.fill('form#login_form', {
	        'email': 'kykkyn2@gmail.com',
	        'pass': 'qkrwjd1'
	 }, true);
});

casper.then(function() {
	this.capture('aiafacebook.png', undefined, {
	    format: 'png',
	    quality: 75
	});
});

casper.run();