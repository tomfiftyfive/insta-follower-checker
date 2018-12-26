// cssInsertedState == 0;

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "getStats.js"});

		chrome.tabs.insertCSS(tab.id, {
	      file: "style.css"
	  });

	// if(cssInsertedState == 0) {
	// 	chrome.tabs.insertCSS(tab.id, {
	//       file: "style.css"
	//   });
	// 	cssInsertedState = 1;
	// }
});
