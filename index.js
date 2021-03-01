if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js').then(reg => {
		reg.onupdatefound = () => {
		  const installingWorker = reg.installing;
		  installingWorker.onstatechange = () => {
			if (installingWorker.state === 'installed' &&
				navigator.serviceWorker.controller) {
			  // Preferably, display a message asking the user to reload...
			  console.log('refresh please');
			  if (confirm('refresh')) {
				  window.location.reload();
			  } else {
				console.log('refresh please2');
			  }
			}
		  };
		};
	  });
}