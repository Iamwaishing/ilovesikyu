if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js').then(registration => {
		console.log('Registration succeeded');
		console.log(registration);
	}).catch(error => {
		console.log('Registration failed');
		console.log(error);
	});
}