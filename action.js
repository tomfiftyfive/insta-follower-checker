chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "getStats.js"});
	//chrome.tabs.executeScript({
	//	code: 'document.body.style.backgroundColor="red"'
	//});
});

