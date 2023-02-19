function tryRemoveLayer(nAttempts) {
	let div = document.querySelector('#layers');
	if (div) {
		div.style.display = 'none';
		return;
	}
	if (nAttempts > 1) {
		setTimeout(() => tryRemoveLayer(nAttempts -1), 1000);
	} else {
		console.log("twit extension: could not find div#layers, giving up");
	}
}
setTimeout(() => tryRemoveLayer(10), 1000);
