function listenForClicks() {
	document.addEventListener('click', (e) => {
		function downloadURL()
		{
			return browser.extension.getURL('down-arrow');
		}
		function run(tabs)
		{
		browser.tabs.ExecuteScript({file: 'content-script/imageDownloader.js'});	
		}
	});
}
listenForClicks();