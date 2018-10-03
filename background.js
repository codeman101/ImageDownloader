//--------------------------------------------------------------------------------------------------
// Name:
// btnClick
// GF
// Arguments:
// None
//
//
// About:
// Calls content.js to be executed.
//
//
// Line at the end:
// adds a listener so that function will only execute when addon icon is clicked
//--------------------------------------------------------------------------------------------------


btnClick = function(){
browser.tabs.executeScript({
        file: 'content.js'
    });
}
browser.browserAction.onClicked.addListener(btnClick);
