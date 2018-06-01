
if (navigator.serviceWorker) {

  	navigator.serviceWorker.register('/sw.js').then(function(reg) {
  		console.log('Registeration Succeded');
  	}).catch(function(error) {
    	console.log('Service Worker did not register');
	});

}